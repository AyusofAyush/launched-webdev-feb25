import 'reflect-metadata';
import { AppDataSource } from './data-source';

AppDataSource.initialize()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch(error => console.log(error));
