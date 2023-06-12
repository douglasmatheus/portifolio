import Link from "next/link"

function Tempo(props) {
  console.log('> Passando pelo Frontend;')
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
    <div>
      <div>
        <div>{dynamicDateString} (dinâmico)</div>
        <div>{props.staticDateString} (estático)</div>
      </div>

      <Link href="/">
        <a>Acessar página home</a>
      </Link>
    </div >
  )
}

export async function getStaticProps() {
  console.log('> Passando pelo getStaticPros();');
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString
    },
    revalidate: 1
  }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default Tempo;