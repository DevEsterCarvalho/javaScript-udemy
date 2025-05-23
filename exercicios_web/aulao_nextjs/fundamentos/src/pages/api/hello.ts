// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const idadeStr = req.query.idade;

	const idade = typeof idadeStr === "string" ? +idadeStr : undefined;

	res.status(200).json({
		name: "Teste API",
		method: req.method,
		nome: req.query.nome,
		idade: idade,
	});
}
