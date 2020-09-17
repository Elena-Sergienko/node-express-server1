import User from './Model';

export default function useReqister(req, res) {

  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });

  newUser.save()
    .then(() => {
      res.status(200).json('User created');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User NOT created');

    })
    .finally(() => {
      console.log('END');
    });
}