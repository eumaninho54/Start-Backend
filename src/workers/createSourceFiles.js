const fs = require('fs');
const path = require('path');
const { parentPort } = require('worker_threads');
const Ora = require('ora'); 

parentPort?.on('message', async (props) => {
  await createSourceFiles(props);
  parentPort?.postMessage({});
});

const createSourceFiles = async (props) => {
  const { pathName, framework } = props;

  const rootPath = path.resolve('.');
  const templateDir = path.join(rootPath, `src/templates/${framework}`);

  copyDirectory(templateDir, pathName);

  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2500);
  });
}

const copyDirectory = (source, target) => {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  const items = fs.readdirSync(source, { withFileTypes: true });

  items.forEach(item => {
    const srcPath = path.join(source, item.name);
    const tgtPath = path.join(target, item.name);

    if (item.isDirectory()) {
      copyDirectory(srcPath, tgtPath);
    } else {
      fs.copyFileSync(srcPath, tgtPath);
    }
  });
}
