/**
 * @description
 * @author 阿怪
 * @date 2024/2/27 17:47
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */


import { commonConfig } from './common.config';
import { build } from 'vite';
import { EsConfig } from './es.config';
import { globalStyleConfig, moveGlobalToEs } from './globalStyle.config';
import fs from 'fs';

const esConfig = new EsConfig();
const res = await build(commonConfig);
const esmBuildRes = await build(esConfig.config);
const esmGlobalCssBuildRes = await build(globalStyleConfig);

for (const key in esConfig.savedCssObj) {
  const value = esConfig.savedCssObj[key];
  const res = fs.existsSync(key);
  // 在头部插入 import '${value}.css';
  if (res) {
    const data = fs.readFileSync(key, 'utf-8');
    fs.writeFileSync(key, `import './${value}.css';\n${data}`);
  }
}

if (res && esmBuildRes && esmGlobalCssBuildRes) {
  moveGlobalToEs();
}

