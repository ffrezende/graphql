export const MENSAGEM_ARRAY_QUERYSTRING = {
    mensagem: "Erro no método validaQueryString(). Necessário um array de campos válido.",
    codigo: 400001
  };
  export const MENSAGEM_OBJETO_QUERYSTRING = {
    mensagem: "Erro no método validaQueryString(). Necessário um objeto de Query String válido.",
    codigo: 400002
  };
  export const MENSAGEM_PARSE_QUERYSTRING = {
    mensagem: key => `Erro ao realizar o parse da Query String. Campo ${key} não permitido`,
    codigo: 400003
  };
  export const MENSAGEM_ARRAY_BODY = {
    mensagem: "Erro no método validaBody(). Necessário um array de campos válido.",
    codigo: 400004
  };
  export const MENSAGEM_OBJETO_BODY = {
    mensagem: campos =>
      `Erro no método validaBody(). Necessário informar um objeto válido com os seguintes parâmetros: ${campos.join(", ")}.`,
    codigo: 400005
  };
  export const MENSAGEM_HEADER = { mensagem: "Usuário de alteração não informado no Header da requisição", codigo: 400006 };
  
  export const URL_INVALIDA = { mensagem: "A URL possui parâmetros inválidos", codigo: 400011 };
  
  export const MENSAGEM_ARRAY_USUARIO_NAO_EXISTE = {
    mensagem: "Usuário não existe",
    codigo: 400006
  };