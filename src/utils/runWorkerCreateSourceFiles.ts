import path from "path";
import { Worker } from "worker_threads";
import { IChoiceFramework } from "./choiceFramework";

type IProps = {
  pathName: string;
  framework: IChoiceFramework;
};

export const runWorkerCreateSourceFiles = async (props: IProps): Promise<void> => {
  const { pathName, framework } = props

  return await new Promise((resolve) => {
    const worker = new Worker(`${path.join(__dirname, '..')}/workers/createSourceFiles.js`)

    worker.postMessage({
      pathName: pathName,
      framework: framework
    })

    worker.on('message', () => {
      resolve();
    })
  })
}