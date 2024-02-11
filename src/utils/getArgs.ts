import readline from "readline";
import minimist from "minimist";
import path from "path";

type IGetArgs = {
  projectName: string;
  pathName: string;
};

export const getArgs = async (): Promise<IGetArgs> => {
  const args = minimist(process.argv.slice(2), {
    alias: {
      n: "name",
      D: "dev"
    },
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  if (!args.name) {
    args.name = await(new Promise<string>((resolve) => {
      rl.question("Project name: ", (answer) => {
        if (answer === "") {
          resolve(path.basename(__dirname))
        } 
        else {
          resolve(answer);
        }
        rl.close();
      });
    }));
  }

  const pathName = args.dev
    ? `${path.dirname(__dirname)}/example`
    : path.dirname(__dirname)

  return {
    projectName: args.name,
    pathName: pathName
  }
};
