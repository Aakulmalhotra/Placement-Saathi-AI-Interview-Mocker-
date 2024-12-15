/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:S5ZRyhg9blDX@ep-odd-limit-a5j79np4.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };