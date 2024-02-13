import {
  getArgs,
  choiceFramework,
  getPathName,
  runWorkerCreateSourceFiles,
  resolvePackages,
  changeDynamicName,
} from "../utils";
import ora from "ora";

main();

async function main() {
  const args = await getArgs();
  const pathName = getPathName({ isDev: args.isDev });

  console.log('\n[1] - Initial project settings');
  
  const framework = await choiceFramework();

  const creatingFiles = ora({
    prefixText: '[2] - Creating base file structure 📂...'
  }).start();

  await runWorkerCreateSourceFiles({
    pathName: pathName,
    framework: framework
  })

  creatingFiles.succeed();

  const changingDynamicName = ora({
    prefixText: `[3] - Adjusting dynamic names in the files to ${args.projectName}.`
  }).start();
  
  await changeDynamicName({
    pathName: pathName,
    projectName: args.projectName
  });

  changingDynamicName.succeed();

  const resolvingPackages = ora({
    prefixText: '[4] - Resolving packages 📦...'
  }).start();

  await resolvePackages({ 
    pathName: pathName
  });

  resolvingPackages.succeed();

  process.exit(0);
}