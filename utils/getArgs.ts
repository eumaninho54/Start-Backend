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
      v: "version",
      h: "help",
      D: "dev",
    },
    boolean: ["dev", "version", "help"],
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  await topLevelArgument(args);

  console.log("This script will create a pre-defined backend node project 🚀.");
  console.log("Support us - https://github.com/eumaninho54/Start-Backend. \n");

  if (!args.name) {
    args.name = await new Promise<string>((resolve) => {
      const defaultProjectName = path
        .basename(path.resolve("."))
        .replace(/[^A-Za-z0-9.-]+/g, "-")
        .replace(/^[-_.]+|-+$/g, "")
        .toLowerCase();

      rl.question(`Project name (${defaultProjectName}): `, (answer) => {
        if (answer === "") {
          resolve(defaultProjectName);
        } else {
          resolve(answer);
        }
        rl.close();
      });
    });
  }

  return {
    projectName: args.name,
    isDev: args.dev,
  };
};

const topLevelArgument = async (args: Record<string, string>) => {
  const packageJson = await import(path.join(__dirname, `../package.json`));

  if (args.version) {
    console.log(`Your version: ${packageJson.version}`);
    process.exit(0);
  }

  if (args.help) {
    console.log("");
    console.log("  Usage: start-backend [options]");
    console.log("");
    console.log("  Options:");
    console.log("");
    console.log("    -n, --name <string>  Name of the project. If not specified, the current.");
    console.log("                         directory name is used.");
    console.log("    -v, --version        Output the version number of the start-backend tool.");
    console.log("    -D, --dev            Run in development mode. Generates in example folder.");
    console.log("    -h, --help           Output usage information. This help text shows you.");
    console.log("");

    process.exit(0);
  }
};
