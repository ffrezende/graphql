import { Request, Response } from 'express';
import BaseController from '../shared/controllers/BaseControler';
import GraphBLL from '../graph/BLL/GraphBLL';
import GraphRepositorio from '../graph/RepositorioREST/GraphRepositorio';

export default class GraphQLController extends BaseController {
  constructor() {
    super();
  }
  obterLib(): GraphBLL {
    return new GraphBLL(new GraphRepositorio());
  }

  graphQL = async (req: Request, res: Response) => {
    try {
      const graphBLL = this.obterLib();
      return res.status(200).json(await graphBLL.MessageGraph());
    } catch (erro) {
      return res.status(403).json();
    }
  };
}
