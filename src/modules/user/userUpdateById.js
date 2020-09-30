import User from './Model';

export default function userUpdateById(req, res) {

  const userId = req.params.userId;

  User
    .findByIdAndUpdate(userId, )
    .limit()
    .skip()
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json('User get all ERROR');
    });
}