import { Client } from "pg";

export async function getClient() {
  const client = new Client(
    "postgresql://sachu0dev:lavqB0A8togZ@ep-silent-rice-a73pp6ug.ap-southeast-2.aws.neon.tech/newdb?sslmode=require"
  );
  await client.connect();
  return client;
}
