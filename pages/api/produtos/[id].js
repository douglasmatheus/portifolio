export async function gerServerSideProps(context) {
    const id = context.query.id;

    return {
        props: {
            id: id
        }
    }
}

function Produtos(props) {
    console.log(props.id);
}

export default Produtos;