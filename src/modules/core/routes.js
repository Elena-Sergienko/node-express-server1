import infoRouter from '../info/Routes';

export default function routs(app){
  app.use('/info', infoRouter);
}