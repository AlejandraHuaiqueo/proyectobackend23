import multer from 'multer';
import bcrypt from 'bcrypt';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + '/public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const uploader = multer({ storage });

import path from 'path';
import { fileURLToPath } from 'url';
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

import { connect } from 'mongoose';
export async function connectMongo() {
  try {
    await connect(
      "mongodb+srv://alejandrahuaiqueo:Iximisol22@cluster0.gp9t7br.mongodb.net/proyecto23"
    );
    console.log("Plugged to mongo")
  } catch (e) {
    throw "Cannot connect to database"
  }
}

//----------------bcrypt------------------------------
export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));
export const isValidPassword = (password, hashPassword) => bcrypt.compareSync(password, hashPassword);