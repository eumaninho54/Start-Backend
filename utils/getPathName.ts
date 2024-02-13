import path from "path";

type IProps = {
  isDev: boolean;
};

export const getPathName = (props: IProps): string => {
  const { isDev } = props

  return isDev
    ? `${path.resolve('.')}\\example`
    : path.resolve('.');
};
