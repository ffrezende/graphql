import BaseException from "./BaseException";

export default class BLLException extends BaseException {
  constructor(codigo: number, mensagem: string, stack?: any, status: number = 400) {
    super(codigo, mensagem, status, stack);
  }
}