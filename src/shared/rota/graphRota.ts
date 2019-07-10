import { Router } from 'express';

import gerenciadorLog from '../middleware/gerenciadorLog';
import GraphQLController from '../../graph/GraphQLController';

const graphQLController = new GraphQLController();

const graphRota = Router();

graphRota.get('/graph', gerenciadorLog, graphQLController.graphQL);

export { graphRota };
