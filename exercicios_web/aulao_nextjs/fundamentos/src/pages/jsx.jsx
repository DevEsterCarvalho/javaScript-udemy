import Layout from "../components/Layout";

function Jsx() {
	const titulo = <h1>JSX é um conceito central</h1>;
	return (
		<Layout titulo="Entendendo o Jsx">
			{titulo}
			<h2>{"muito legal".toUpperCase()}</h2>
			<p>{JSON.stringify({ nome: "João", idade: 30 })}</p>
		</Layout>
	);
}

export default Jsx;
