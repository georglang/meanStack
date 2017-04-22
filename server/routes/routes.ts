import MessageRouter from './routes.messages';

export default function setRoutes(app) {
  app.use('/api/messages', MessageRouter);
}
