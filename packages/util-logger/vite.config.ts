/* Copyright 2022, HST. */

import { pluginViteConfig } from '../../vite.config';
import pkg from './package.json';
export default () => pluginViteConfig('util-logger', pkg);
