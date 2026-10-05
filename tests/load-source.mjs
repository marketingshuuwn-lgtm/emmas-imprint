import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const cache = new Map();
export function loadSource(file) {
  const absolute = path.resolve(file);
  if (cache.has(absolute)) return cache.get(absolute);
  const result = { exports: {} };
  cache.set(absolute, result.exports);
  const code = ts.transpileModule(fs.readFileSync(absolute, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const sourceRequire = name => name.startsWith('@/') ? loadSource(`src/${name.slice(2)}.ts`) : require(name);
  vm.runInNewContext(code, { module: result, exports: result.exports, require: sourceRequire, process, URL });
  return result.exports;
}
