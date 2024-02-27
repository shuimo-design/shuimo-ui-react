/**
 * @description shuimo-ui-react build config
 * @author 阿怪
 * @date 2024/2/27 17:47
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import react from '@vitejs/plugin-react-swc';
import lightningcss from 'vite-plugin-lightningcss';
import path, { dirname } from 'path';
import { normalizePath, UserConfig } from 'vite';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const outputRoot = normalizePath(path.resolve(__dirname, '../../lib/dist'));
export const baseRoot = normalizePath(path.resolve(__dirname, '../../lib'));
export const getPath = (url: string) => {
  const p = path.resolve(__dirname, `../../lib/${url}`);
  return p;
};

export const libName = 'shuimo-ui-react';

export const plugins = [
  react(),
  lightningcss({ browserslist: '>= 0.25%' }),
];

export const fileName = (format: string, entryName: string) => {
  if (entryName === 'index') {
    entryName = libName;
  }
  switch (format) {
    case 'es':
      return `${entryName}.mjs`;
    case 'cjs':
      return `cjs/${entryName}.cjs`;
    case 'umd':
      return `umd/${entryName}.js`;
  }
  return entryName;
};

export const rollupOptions = {
  external: ['react', 'react-dom'],
};

export const buildConfig: UserConfig['build'] = {
  outDir: outputRoot,
  target: 'esnext',
  rollupOptions,
  terserOptions: {
    mangle: false,
  },
};

export const commonConfig: UserConfig = {
  plugins,
  build: {
    ...buildConfig,
    lib: {
      name: libName,
      formats: ['cjs', 'umd', 'es'],
      fileName,
      entry: getPath('index.ts'),
    },
  },
};
