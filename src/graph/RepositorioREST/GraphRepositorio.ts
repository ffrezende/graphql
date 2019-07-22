import IGraphRepositorio from './IGraphRepositorio';
const fetch = require('node-fetch');

export default class GraphRepositorio implements IGraphRepositorio {
  async MessageGraph(author: string, content: string, query: string): Promise<any> {
    return new Promise(async (resolve: Function, reject: Function) => {
      try {
        return resolve(
          await fetch('localhost:3000/api/v1/graph', {
            method: 'POST',
            body: JSON.stringify({
              query,
              variables: {
                input: {
                  author,
                  content
                }
              }
            })
          })
        );
      } catch (erro) {
        reject(erro);
      }
    });
  }
  async health(): Promise<string> {
    return new Promise(async (resolve: Function, reject: Function) => {
      try {
        resolve(`connection ok`);
      } catch (erro) {
        reject(`connection reject`);
      }
    });
  }
}
