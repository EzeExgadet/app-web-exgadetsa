const Link = require('next/link');
const Head = require('next/head');

export default function Index()
{
  return(
    <>
      <Head>
        <title>Login Test</title>
      </Head>
      <form className="grid grid-rows-3 gap-3" action="" method="post">
        <input className="outline outline-2 outline-offset-2 outline-cyan-500" type="text" name="" id="" />
        <input className="outline outline-2 outline-offset-2 outline-cyan-500" type="text" name="" id="" />
        <Link className="outline outline-2 outline-offset-2 outline-cyan-500" href="/about">Enviar</Link>
      </form>
    </>
  );
}