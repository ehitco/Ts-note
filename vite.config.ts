/* Copyright 2022, HST. */
import { resolve } from 'pathe';
import type { BuildOptions, UserConfig as ViteUserConfig, UserConfigExport } from 'vite';
import { defineConfig, loadEnv } from 'vite';

export const libFileName = (format: string) => `index.${format}.js`;
const resolvePath = (str: string) => resolve(__dirname, str);

function isObject(item: unknown): item is Record<string, unknown> {
    return Boolean(item && typeof item === 'object' && !Array.isArray(item));
}

function mergeDeep<T>(target: T, ...sources: T[]): T {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                mergeDeep(target[key] as T, source[key] as T);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }

    return mergeDeep(target, ...sources);
}

export const viteBuild = (
    packageDirName: string,
    pkg: any,
    options: BuildOptions = {},
): BuildOptions =>
    mergeDeep<BuildOptions>(
        {
            sourcemap: true,
            lib: {
                entry: resolvePath(`packages/${packageDirName}/src/index.ts`),
                name: `${packageDirName}`,
                fileName: libFileName,
            },
            rollupOptions: {
                // 确保外部化处理那些你不想打包进库的依赖
                external(id: string) {
                    return Object.keys(pkg.dependencies).some((k) => new RegExp(`^${k}`).test(id));
                },
                output: {
                    dir: resolvePath(`packages/${packageDirName}/dist`),
                },
            },
        },
        options,
    );

/**
 * Config for plugins
 *
 * @param packageDirName - package directory name
 * @param options - custom options
 * @returns user config
 */
export const pluginViteConfig = (
    packageDirName: string,
    pkg: any,
    options: ViteUserConfig = {},
) => {
    const vitePlugins = options.plugins ?? [];
    return defineConfig({
        ...options,
        build: viteBuild(packageDirName, pkg, options.build),
        plugins: [...vitePlugins],
    });
};
