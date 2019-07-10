export class Erro {
	public codigo: number;
	public mensagem: string;
	public excecao: any;

	constructor(erro: Erro = {} as Erro) {
		const {
			codigo = undefined,
			mensagem = undefined,
			excecao = undefined
		} = erro;

		this.codigo = codigo;
		this.mensagem = mensagem;
		this.excecao = excecao;
	}
}