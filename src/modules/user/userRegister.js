import User from './Model';

export default function useReqister(req, res) {

  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });

  newUser.save();
  res.status(200).json('userRegister here');
}