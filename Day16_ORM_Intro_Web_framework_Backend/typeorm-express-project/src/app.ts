import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './data-source';
import { User } from './entity/User';

const app = express();
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    const userRepository = AppDataSource.getRepository(User);

    app.get('/users', async (req, res) => {
      const users = await userRepository.find();
      res.json(users);
    });

    app.post('/users', async (req, res) => {
      const user = userRepository.create(req.body);
      const result = await userRepository.save(user);
      res.send(result);
    });

    app.listen(3000, () => {
      console.log('Server started on http://localhost:3000');
    });
  })
  .catch(error => console.log(error));
