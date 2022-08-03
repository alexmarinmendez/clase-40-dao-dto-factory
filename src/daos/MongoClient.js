import mongoose from 'mongoose';

export default class MongoClient {
  constructor() {
    this.connected = true;
    this.client = mongoose;
  }
  connect = async () => {
    try {
      await this.client.connect('mongodb+srv://test:coder@cluster0.q6dhk.mongodb.net/clase40?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
