function Tempo(props) {
  console.log('> Passando pelo Frontend;')
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
    <div>
      <div>{dynamicDateString} (dinâmico)</div>
      <div>{props.staticDateString} (estático)</div>
    </div>
  )
}

export function getStaticProps() {
  console.log('> Passando pelo getStaticPros();')
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString
    }
  }
}

export default Tempo;