import IGraphQLRepositorio from './IGraphQLRepositorio';

let fakeDatabase = { message: '' };

class MessageModel {
  public id: any;
  public content: any;
  public author: any;

  constructor(message: MessageModel = {} as MessageModel) {
    const { id = undefined, content = undefined, author = undefined } = message;

    this.id = id;
    this.content = content;
    this.author = author;
  }
}
class Message extends MessageModel {
  constructor(id, content, author) {
    super({ id, content, author });
  }
}
export const root = {
  hello: () => {
    return 'Hello world!';
  },
  quoteOfTheDay: () => {
    return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
  },
  random: () => {
    return Math.random();
  },
  rollThreeDice: () => {
    return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
  },
  rollDice: ({ numDice, numSides }) => {
    let output = [];
    for (let i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  },
  getMessage: ({ id }) => {
    if (!fakeDatabase[id]) {
      throw new Error('no message exists with id ' + id);
    }
    const { content, author } = fakeDatabase[id];
    return new Message(id, content, author);
  },
  createMessage: ({ input }) => {
    var id = require('crypto')
      .randomBytes(10)
      .toString('hex');

    fakeDatabase[id] = input;
    const { content, author } = fakeDatabase[id];

    return new Message(id, content, author);
  },
  updateMessage: ({ id, input }) => {
    if (!fakeDatabase[id]) {
      throw new Error('no message exists with id ' + id);
    }

    fakeDatabase[id] = input;
    const { content, author } = fakeDatabase[id];

    return new Message(id, content, author);
  }
};
