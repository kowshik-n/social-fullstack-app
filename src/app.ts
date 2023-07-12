import { ChattyServer } from '@root/setupServer';
import express, { Express } from 'express';
import dbConnect from '@root/setupDatabase';
import { config } from '@root/config';

class Application {
  public initialize(): void {
    this.loadConfig();
    dbConnect();
    const app: Express = express();
    const server: ChattyServer = new ChattyServer(app);
    server.start();
  }

  public loadConfig(): void {
    config.validateConfig();
    config.cloudinaryConfig();
  }
}

const application: Application = new Application();

application.initialize();
