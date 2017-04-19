import * as path from 'path';
import MessageRouter from './routes.messages';

export default function setRoutes(app) {
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  app.use('/api/messages', MessageRouter);
}
