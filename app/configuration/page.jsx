"use server";
import * as edgedb from "edgedb";

const client = edgedb.createClient({
  // Note: these options aren't needed for your project deployed on Vercel,
  // they will be automatically found from environment variables
  instanceName: "vercel-VK4D729MtAUOmXoL0RQSFdQq/keeper-db",
  secretKey:
    "nbwt1_eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJlZGIuZC5hbGwiOnRydWUsImVkYi5pIjpbInZlcmNlbC1WSzRENzI5TXRBVU9tWG9MMFJRU0ZkUXEva2VlcGVyLWRiIl0sImVkYi5yLmFsbCI6dHJ1ZSwiaWF0IjoxNzM4NDkxMTU3LCJpc3MiOiJhd3MuZWRnZWRiLmNsb3VkIiwianRpIjoiT2h2aHJPRk9FZS1rNnc4ZTBIMWhHUSIsInN1YiI6Ik9jcVYxdUZPRWUtLWpMOFZya1AtZEEifQ.Ot2vo7Zz-lGXfln5QdxuYkZAHU6GMZXYrtIZzZ9DrspB-XDvH6Fm6kCYhE3TZKW1J8Wup9QQej7sUBj0OZqVuw",
});

export default async function Home() {
  const result = await client.query("select 1 + 2");
  return <p>{result}</p>;
}
