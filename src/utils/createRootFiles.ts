import fs from "fs";
import path from "path";

type IProps = {
  projectName: string;
  pathName: string;
};

export const createRootFiles = (props: IProps) => {
  const { projectName, pathName } = props;

  // tsconfig.json
  const tsconfig = {
    compilerOptions: {
      target: "ES2020",
      module: "commonjs",
      strict: true,
      esModuleInterop: true,
      outDir: "./build",
      rootDir: "./src",
    },
    include: ["src/**/*.ts"],
    exclude: ["node_modules"],
  };

  fs.writeFileSync(
    path.join(pathName, "tsconfig.json"),
    JSON.stringify(tsconfig, null, 2)
  );

  // README.md
  const readme = `# ${projectName} - ✨ Your readme here ✨`

  fs.writeFileSync(
    path.join(pathName, "README.md"),
    readme
  );

  // gitignore
  const gitignore = `# node
node_modules/
build/

# Local
.vscode/
.idea/
tmp/
temp/
`

  fs.writeFileSync(
    path.join(pathName, ".gitignore"),
    gitignore
  );
};
