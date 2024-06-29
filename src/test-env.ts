// src/test-env.ts
import  dotenv  from "dotenv";

dotenv.config();

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

if (!email || !password) {
  throw new Error("Email or Password environment variable is not set");
}

console.log("EMAIL:", email);
console.log("PASSWORD:", password);
