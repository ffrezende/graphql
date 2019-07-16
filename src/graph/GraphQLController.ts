import { Request, Response } from 'express';
import BaseController from '../shared/controllers/BaseControler';

export default class GraphQLController extends BaseController {
  constructor() {
    super();
  }

  graphQL = async (req: Request, res: Response) => {
    try {
      const { param } = req;
      return res.status(200).json();
    } catch (erro) {
      return res.status(403).json();
    }
  };
}
