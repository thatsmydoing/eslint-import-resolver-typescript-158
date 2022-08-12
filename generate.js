const fs = require('fs');

fs.mkdirSync('mod', { recursive: true })
const mainJs = fs.openSync('main.js', 'w');
for (let i = 0; i < 10000; ++i) {
  fs.writeSync(mainJs, `import './mod/${i}.js';\n`);
  fs.writeFileSync(`mod/${i}.js`, '');
}
fs.closeSync(mainJs);
