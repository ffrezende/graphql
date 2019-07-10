import BaseException from './BaseException';

export default class ControllerException extends BaseException {
	constructor(codigo: number, mensagem: string, stack?: any) {
		super(codigo, mensagem, 400, stack);
	}
}