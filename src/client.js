import 'dotenv/config';
import prismaPkg from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const { PrismaClient } = prismaPkg;

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error('DATABASE_URL is not defined.');

const adapter = new PrismaPg({ connectionString });
export const prisma = new PrismaClient({ adapter });

prisma.$connect()
    .then(() => console.log('Prisma Client connected to Postgres via Adapter.'))
    .catch((error) => {
        console.error('Prisma connection error:', error);
        process.exit(1);
    });
