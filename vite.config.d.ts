import type { BuildOptions, UserConfig as ViteUserConfig, UserConfigExport } from 'vite';
export declare const libFileName: (format: string) => string;
export declare const viteBuild: (packageDirName: string, pkg: any, options?: BuildOptions) => BuildOptions;
/**
 * Config for plugins
 *
 * @param packageDirName - package directory name
 * @param options - custom options
 * @returns user config
 */
export declare const pluginViteConfig: (packageDirName: string, pkg: any, options?: ViteUserConfig) => UserConfigExport;
