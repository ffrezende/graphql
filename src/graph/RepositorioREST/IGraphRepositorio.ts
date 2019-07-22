export default interface IGiroRepositorio {
  MessageGraph(author: string, content: string, query: string): Promise<any>;
  health(): Promise<string>;
}
