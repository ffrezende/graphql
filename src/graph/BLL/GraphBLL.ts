import GraphRepositorio from '../RepositorioREST/GraphRepositorio';
import IGraphBLL from '../BLL/IGraphBLL';

export default class GraphBLL implements IGraphBLL {
  private graphRepositorio: GraphRepositorio;

  constructor(giroRepositorio) {
    this.graphRepositorio = giroRepositorio;
  }

  MessageGraph(): Promise<Array<string>> {
    return new Promise(async (resolve: Function, reject: Function) => {
      try {
        const author = 'andy';
        const content = 'hope is a good thing';
        const query = `mutation CreateMessage($input: MessageInput) {
          createMessage(input: $input) {
            id
          }
        }`;
        const resp = await this.graphRepositorio.MessageGraph(author, content, query);
        resolve();
      } catch (erro) {
        reject(erro);
      }
    });
  }

  health(): Promise<Array<string>> {
    return new Promise(async (resolve: Function, reject: Function) => {
      try {
        resolve(await this.graphRepositorio.health());
      } catch (erro) {
        reject(erro);
      }
    });
  }
}
