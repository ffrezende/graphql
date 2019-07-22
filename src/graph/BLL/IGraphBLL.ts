export default interface IGiroNLL {
  MessageGraph(): Promise<any>;
  health(): Promise<Array<string>>;
}
