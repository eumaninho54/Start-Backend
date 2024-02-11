import path from "path";

type IProps = {
  isDev: boolean;
};

export const getPathName = (props: IProps): string => {
  const { isDev } = props

  return isDev
    ? `${path.dirname(path.dirname(__dirname))}\\example`
    : path.dirname(path.dirname(__dirname));
};
