import dotenv from "dotenv";

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const db_name = process.env.DB_NAME;

const mongoDbUrl = `mongodb+srv://${username}:${password}@team37cluster.vpykwol.mongodb.net/${db_name}?retryWrites=true&w=majority&appName=Team37Cluster`;

export default {
  mongoDbUrl,
};
