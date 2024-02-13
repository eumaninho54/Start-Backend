import fs from "fs/promises";
import path from "path";

type IProps = {
  projectName: string;
  pathName: string;
}

export const changeDynamicName = async (props: IProps) => {
  const { projectName, pathName } = props;

  //README.md
  await changeFile(projectName, pathName, 'README.md');

  //package.json
  await changeFile(projectName, pathName, 'package.json');

  //.env.example
  await changeFile(projectName, pathName, '.env.example');
}

const changeFile = async (
  projectName: string, 
  pathName: string,
  fileName: string
) => {
  const filePath = path.join(pathName, fileName);
  let content = await fs.readFile(filePath, 'utf-8');

  const modifiedContent = content.replace(/{-projectName-}/g, projectName);
  await fs.writeFile(filePath, modifiedContent, 'utf-8');
}