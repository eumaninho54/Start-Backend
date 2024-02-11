import {
  getArgs,
  createPackageJson,
  getPathName,
  createRootFiles,
  createSourceFiles,
  resolvePackages,
} from "./utils";
import ora from "ora";

main();

async function main() {
  console.log("This script will create a pre-defined node project 🚀.\n");

  console.log("Support us - https://github.com/eumaninho54/init-express. \n\n");

  const args = await getArgs();
  const pathName = getPathName({ isDev: args.isDev });

  const resolvingPackages = ora({
    prefixText: '[1] - Resolving packages 📦...'
  }).start();

  await resolvePackages({ 
    pathName: pathName,
    oraRef: resolvingPackages
  });

  const creatingFiles = ora({
    prefixText: '[2] - Creating base file structure 📂...'
  }).start();

  createPackageJson({
    projectName: args.projectName,
    pathName: pathName,
  });

  createRootFiles({
    projectName: args.projectName,
    pathName: pathName
  });

  createSourceFiles({
    projectName: args.projectName,
    pathName: pathName,
    oraRef: creatingFiles
  });
}

/*const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Project name
const projectName = process.argv[2];

if (!projectName) {
  console.log("Enter the project name: ");
  process.exit(1);
}

// package.json
const projectPath = path.join(__dirname, projectName);
fs.mkdirSync(projectPath, { recursive: true });

const packageJson = {
  name: projectName,
  version: "1.0.0",
  description: "",
  main: "server.js",
  scripts: {
    start: "node server.js"
  },
  dependencies: {
    express: "^4.18.2"
  }
};
fs.writeFileSync(path.join(projectPath, 'package.json'), JSON.stringify(packageJson, null, 2));

// Cria o servidor Express básico
const serverJs = `const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(\`Servidor rodando na porta \${PORT}\`));
`;
fs.writeFileSync(path.join(projectPath, 'server.js'), serverJs);

// Cria o diretório de rotas
const routesPath = path.join(projectPath, 'routes');
fs.mkdirSync(routesPath);

console.log(`Projeto ${projectName} criado com sucesso!`);
*/

/*const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Project name
const projectName = process.argv[2];

if (!projectName) {
  console.log("Enter the project name: ");
  process.exit(1);
}

// package.json
const projectPath = path.join(__dirname, projectName);
fs.mkdirSync(projectPath, { recursive: true });

const packageJson = {
  name: projectName,
  version: "1.0.0",
  description: "",
  main: "server.js",
  scripts: {
    start: "node server.js"
  },
  dependencies: {
    express: "^4.18.2"
  }
};
fs.writeFileSync(path.join(projectPath, 'package.json'), JSON.stringify(packageJson, null, 2));

// Cria o servidor Express básico
const serverJs = `const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(\`Servidor rodando na porta \${PORT}\`));
`;
fs.writeFileSync(path.join(projectPath, 'server.js'), serverJs);

// Cria o diretório de rotas
const routesPath = path.join(projectPath, 'routes');
fs.mkdirSync(routesPath);

console.log(`Projeto ${projectName} criado com sucesso!`);
*/
