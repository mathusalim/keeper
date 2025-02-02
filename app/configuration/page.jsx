'use server';
import * as edgedb from 'edgedb';
import e from '../../dbschema/edgeql-js';

export default async function Home() {
  const client = edgedb.createClient({
    // Note: these options aren't needed for your project deployed on Vercel,
    // they will be automatically found from environment variables
    instanceName: process.env.DB_INSTANCE,
    secretKey: process.env.DB_KEY
  });

  const t = await e
    .select(e.User, () => ({
      name: true
    }))
    .run(client);
  return <p>{t[0].name}</p>;
}
