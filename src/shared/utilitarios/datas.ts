export function obtemPrimeiroUltimoDiaSemana() {
  const diaAtual = new Date();
  const primeiroDiaSemana = diaAtual.getDate() - diaAtual.getDay();
  const ultimoDiaSemana = primeiroDiaSemana + 6;

  const dataInicioSemana = new Date(diaAtual.setDate(primeiroDiaSemana));
  const dataFimSemana = new Date(diaAtual.setDate(ultimoDiaSemana));

  return { dataInicioSemana, dataFimSemana };
}
