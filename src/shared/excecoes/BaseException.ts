import { Erro } from "../dtos/Erro";

export default class BaseException extends Error {
  protected codigo: number;
  public httpStatus: number;

  constructor(codigo: number, mensagem: string, httpStatus: number, stack?: any) {
    super(mensagem);
    Object.setPrototypeOf(this, BaseException.prototype);
    this.message = mensagem;
    this.codigo = codigo;
    this.httpStatus = httpStatus;
    this.stack = stack;
  }

  public toErro(): Erro {
    return new Erro({
      codigo: this.codigo,
      mensagem: this.message,
      excecao: this.stack
    });
  }
}