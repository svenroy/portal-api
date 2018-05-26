import restify from "restify";
import app from "./api";

const server = restify.createServer({
  name: 'portal',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.pre((req, res, next) => {
  console.info(`${req.method} - ${req.url}`);
  return next();
});

app.configureControllers(server);

server.get('/echo/:name', (req, res, next) => {
  res.send(req.params);
  return next();
});

server.listen(3000, () => {
  console.log('%s listening at %s', server.name, server.url);
});