import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

function Exemplo() {
	return (
		<Layout titulo="Exemplo usando componente">
			<Cabecalho titulo="Next.js e React" />
			<Cabecalho titulo="Aprende Next.js na prática" />
		</Layout>
	);
}

export default Exemplo;
