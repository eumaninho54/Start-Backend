import { exec } from "child_process";
import path from "path";

type IProps = {
  pathName: string;
};

export const resolvePackages = async (props: IProps) => {
  const { pathName } = props;

  return await new Promise((resolve) => {
    const rootPath = path.resolve('.');
    process.chdir(pathName);

    exec("npm install", (err, stdout, stderr) => {
      if (err) {
        console.error(`Error when resolve packages: ${err}`);
      }

      process.chdir(rootPath);
      resolve(1);
    });
  });
};
