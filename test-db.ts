import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { connectToDatabase } from './src/utils/db';

async function test() {
  try {
    await connectToDatabase();
    console.log("Success");
  } catch (e) {
    console.error("Error connecting:");
    console.error(e);
  }
}

test();
