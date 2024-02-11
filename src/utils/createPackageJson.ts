import fs from "fs";
import path from "path";

type IProps = {
  projectName: string;
  pathName: string;
};

export const createPackageJson = (props: IProps) => {
  const { projectName, pathName } = props;

  fs.mkdirSync(pathName, { recursive: true });

  const packageJson = {
    name: projectName,
    version: "1.0.0",
    description: "",
    scripts: {
      start: "ts-node src/index.ts",
      dev: "nodemon src/index.ts",
    },
    dependencies: {
      "@prisma/client": "^5.9.1",
      "cors": "^2.8.5",
      "crypto-js": "^4.2.0",
      "dotenv": "^16.4.2",
      "express": "^4.18.2",
      "joi": "^17.12.1",
      "nodemon": "^3.0.3",
    },
    devDependencies: {
      "@types/cors": "^2.8.17",
      "@types/crypto-js": "^4.2.2",
      "@types/express": "^4.17.21",
      "@types/node": "^20.11.17",
      "prisma": "^5.9.1",
      "ts-node": "^10.9.2",
      "typescript": "^5.3.3",
    },
  };

  fs.writeFileSync(
    path.join(pathName, "package.json"),
    JSON.stringify(packageJson, null, 2)
  );
};
