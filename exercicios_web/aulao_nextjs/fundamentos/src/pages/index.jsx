import Navegador from "../components/Navegador";

function Inicio() {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexWrap: "wrap",
				height: "100vh",
			}}
		>
			<Navegador texto="Estiloso" destino="/estiloso" cor="#9400d3" />
			<Navegador texto="Exemplo" destino="/exemplo" />
			<Navegador texto="Jsx" destino="/jsx" cor="crimson" />
			<Navegador texto="Navegação 01" destino="/navegacao" cor="yellow" />
			<Navegador texto="Navegação 02" destino="/cliente/123" cor="blue" />
		</div>
	);
}

export default Inicio;
