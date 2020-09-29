import User from './Model';

export default function useGetAll(req, res) {
  User
    .find({email: '1234@123'})
    .limit(2)
    .skip(1)
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json('User get all ERROR');
    });
}