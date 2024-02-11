import readline from "readline";
import minimist from "minimist";
import path from "path";

type IGetArgs = {
  projectName: string;
  isDev: boolean;
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
          resolve(
            path.basename(path.resolve('.'))
              .replace(/[^A-Za-z0-9.-]+/g, '-')
              .replace(/^[-_.]+|-+$/g, '')
              .toLowerCase()
          )
        } 
        else {
          resolve(answer);
        }
        rl.close();
      });
    }));
  }

  return {
    projectName: args.name,
    isDev: args.dev
  }
};
