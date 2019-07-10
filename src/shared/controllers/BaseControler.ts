import { Request, Response } from 'express';
import * as contextService from 'request-context';
import { logger } from '../../config/logger/logger';
import BaseException from '../excecoes/BaseException';
import obterIdLog from '../utilitarios/ObterIdLog';
import { Erro } from '../dtos/Erro';
import ControllerException from '../excecoes/ControllerException';
import {
  MENSAGEM_ARRAY_QUERYSTRING,
  MENSAGEM_OBJETO_QUERYSTRING,
  MENSAGEM_PARSE_QUERYSTRING,
  MENSAGEM_ARRAY_BODY,
  MENSAGEM_OBJETO_BODY,
  MENSAGEM_HEADER
} from './constantes';

export default abstract class BaseController {
  protected validaQueryString(campos: Array<string>, queryString: Object): void {
    if (campos.length <= 0)
      throw new ControllerException(MENSAGEM_ARRAY_QUERYSTRING.codigo, MENSAGEM_ARRAY_QUERYSTRING.mensagem);
    if (!queryString)
      throw new ControllerException(MENSAGEM_OBJETO_QUERYSTRING.codigo, MENSAGEM_OBJETO_QUERYSTRING.mensagem);

    Object.keys(queryString).map(key => {
      if (!campos.some(elemento => elemento === key))
        throw new ControllerException(MENSAGEM_PARSE_QUERYSTRING.codigo, MENSAGEM_PARSE_QUERYSTRING.mensagem(key));
    });
  }

  protected validaBody(campos: Array<string>, body: Object, validaTamanho: boolean = true): void {
    if (campos.length <= 0) throw new ControllerException(MENSAGEM_ARRAY_BODY.codigo, MENSAGEM_ARRAY_BODY.mensagem);
    if (!body) throw new ControllerException(MENSAGEM_OBJETO_BODY.codigo, MENSAGEM_OBJETO_BODY.mensagem(campos));
    if (validaTamanho && Object.keys(body).length !== campos.length)
      throw new ControllerException(MENSAGEM_OBJETO_BODY.codigo, MENSAGEM_OBJETO_BODY.mensagem(campos));

    Object.keys(body).map(key => {
      if (validaTamanho && !campos.some(elemento => elemento === key))
        throw new ControllerException(MENSAGEM_PARSE_QUERYSTRING.codigo, MENSAGEM_PARSE_QUERYSTRING.mensagem(key));
    });
  }

  protected validaSeUsuarioExiste(req: Request, res: Response): boolean {
    if (!req.header('usuario')) {
      const erro = new Erro({
        codigo: MENSAGEM_HEADER.codigo,
        mensagem: MENSAGEM_HEADER.mensagem,
        excecao: {}
      });

      logger.error('Erro ao obter a requisição..', obterIdLog(), erro);
      res.status(400).json(erro);
      return false;
    }
    return true;
  }

  protected retornoErro(erro: any, res: Response) {
    if (erro instanceof BaseException) {
      logger.error(erro.message, obterIdLog(), erro.stack);
      res.status(erro.httpStatus).json(erro.toErro());
    } else {
      logger.error(erro.message, obterIdLog(), erro.stack);
      res.status(500).json(erro);
    }
  }

  protected setLocation(req: Request, res: Response, id: string) {
    res.location(`${req.protocol}://${req.get('host')}${req.path}/${id}`);
  }
}
