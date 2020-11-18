import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Home() {
  const [session, loading] = useSession();

  if (loading) return null;

  return (
    <>
      <Head>
        <title>Next auth identity server</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        {!session ? (
          <button onClick={() => signIn('identity-server4')}>Sign In</button>
        ) : (
          <button onClick={signOut}>Sign Out</button>
        )}
      </nav>
      <div>User name{session ? <span>{session.user.name}</span> : null}</div>
    </>
  );
}
