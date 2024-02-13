interface IDomainErrorProps {
  message: string;
  logMessage?: string;
  statusCode?: number
}

export class DomainError  {
  public readonly message: string;
  public readonly logMessage: string;
  public readonly statusCode: number;

  constructor(props: IDomainErrorProps){
    const { message, logMessage = message, statusCode = 400 } = props

    this.message = message;
    this.logMessage = logMessage;
    this.statusCode = statusCode;
  }
};
