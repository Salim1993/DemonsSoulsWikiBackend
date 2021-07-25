import { Request, Response } from 'express'
import express from 'express';
import {createConnection} from "typeorm";
import { Weapon } from './weapon/weapon_entity';
const app = express();
const port = 8000;

createConnection().then(connection => {

  const weaponRepository = connection.getRepository(Weapon)

  app.get('/weapon', async (req: Request, res: Response) => {
    const weapons = await weaponRepository.find();
    res.json(weapons);
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });
});
