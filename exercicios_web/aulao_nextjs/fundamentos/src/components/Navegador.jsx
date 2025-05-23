import Link from "next/link";
import styles from "../styles/Navegador.module.css";

function Navegador(props) {
	return (
		<Link href={props.destino}>
			<div
				className={styles.navegador}
				style={{
					backgroundColor: props.cor ?? "aquamarine",
				}}
			>
				{props.texto}
			</div>
		</Link>
	);
}

export default Navegador;
