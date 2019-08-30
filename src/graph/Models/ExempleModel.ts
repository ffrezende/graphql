export default class ExempleModelComMetodos {
  public idSeguradoraCongenere: number;
  public idFabricante: number;
  public modelo: string;
  public ano: number;
  public valor: number;
  public notaFiscal: {
    numero: string;
    dataSaida: Date;
  };
  publicendereco: Array<string>;
  constructor(formDataEquipmentModel: ExempleModelComMetodos = {} as ExempleModelComMetodos) {
    const { idFabricante, modelo, ano, valor, notaFiscal } = formDataEquipmentModel;
    this.idFabricante = idFabricante;
    this.modelo = modelo;
    this.ano = ano;
    this.valor = valor;
    this.notaFiscal = notaFiscal;
  }

  getEquipmentData() {
    return {
      idFabricante: this.idFabricante,
      modelo: this.modelo,
      ano: this.ano,
      valor: this.valor,
      notaFiscal: this.notaFiscal
    };
  }
}
