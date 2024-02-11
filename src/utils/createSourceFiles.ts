import fs from "fs";
import path from "path";
import ora from "ora";

type IProps = {
  projectName: string;
  pathName: string;
  oraRef: ora.Ora
};

export const createSourceFiles = (props: IProps) => {
  const { projectName, pathName, oraRef } = props

  fs.mkdirSync(`${pathName}/src`, { recursive: true });

  oraRef.succeed();
}