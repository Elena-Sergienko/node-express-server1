import infoRouter from '../info/Routes';
import userRouter from '../user/Routes';

export default function routs(app){
  app.use('/info', infoRouter);
  app.use('/user', userRouter);
}