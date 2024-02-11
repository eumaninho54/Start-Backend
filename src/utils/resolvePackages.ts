import { exec } from "child_process";
import ora from "ora";

type IProps = {
  pathName: string;
  oraRef: ora.Ora;
};

export const resolvePackages = async (props: IProps) => {
  const { pathName, oraRef } = props;

  return await new Promise((resolve) => {
    process.chdir(pathName);

    exec("npm install", (err, stdout, stderr) => {
      if (err) {
        console.error(`Error when resolve packages: ${err}`);
        return;
      }

      oraRef.succeed();
      resolve(1);
    });
  });
};
