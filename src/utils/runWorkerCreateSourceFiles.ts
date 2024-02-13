import { Worker } from "worker_threads";
import { IChoiceFramework } from "./choiceFramework";
import { Ora } from "ora";

type IProps = {
  pathName: string;
  framework: IChoiceFramework;
};

export const runWorkerCreateSourceFiles = async (props: IProps): Promise<void> => {
  const { pathName, framework } = props

  return await new Promise((resolve) => {
    const worker = new Worker('./src/workers/createSourceFiles.js');

    worker.postMessage({
      pathName: pathName,
      framework: framework
    })

    worker.on('message', () => {
      resolve();
    })
  })
}