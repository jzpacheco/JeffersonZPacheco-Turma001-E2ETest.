import * as dotenv from 'dotenv';


dotenv.config();

interface Env {
  LINKEDIN_EMAIL: string;
  LINKEDIN_PASSWORD: string;
  // Add other variables as needed
}

const env: Env = {
  LINKEDIN_EMAIL: process.env.LINKEDIN_EMAIL || '',
  LINKEDIN_PASSWORD: process.env.LINKEDIN_PASSWORD || '',
};

export default env;