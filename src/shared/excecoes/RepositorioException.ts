import BaseException from "./BaseException";

export default class RepositorioException extends BaseException {
  constructor(codigo: number, mensagem: string, stack?: any) {
    super(codigo, mensagem, 500, stack);
  }
}