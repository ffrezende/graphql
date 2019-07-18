import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as contextService from 'request-context';
import * as compression from 'compression';
import { graphRota } from './shared/rota/graphRota';
import schemaQLRota from './shared/rota/schemaQLRota';

import * as cors from 'cors';
import * as morgan from 'morgan';

class App {
  public express;

  constructor() {
    this.express = express();
    this.express.use(bodyParser.json({ limit: '50mb' }));
    this.express.use(
      bodyParser.urlencoded({
        limit: '50mb',
        extended: true
      })
    );
    this.express.use(
      morgan(
        ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :response-time ms :res[content-length] ":referrer" ":user-agent"'
      )
    );
    this.express.use(cors());
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(contextService.middleware('request'));
    this.express.use(compression());
    this.express.use(morgan('combined'));
    this.montarRotasV1();
  }

  private montarRotasV1(): void {
    const router = express.Router();

    router.get('/', (req, res) => {
      res.json({
        message: 'Api V1'
      });
    });
    this.express.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Methods', '*');
      next();
    });

    this.express.use('/api/v1/', router, graphRota);
    this.express.use('/api/v1/graph', schemaQLRota);
  }
}

export default new App().express;
