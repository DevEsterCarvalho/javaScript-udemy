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
			<Navegador
				texto="Componente com Estado"
				destino="/estado"
				cor="#42a9a9"
			/>
			<Navegador
				texto="Integração com API #01"
				destino="/integracao_1"
				cor="pink"
			/>
			<Navegador texto="Conteúdo Estático" destino="/estatico" cor="#fa054a" />
		</div>
	);
}

export default Inicio;
