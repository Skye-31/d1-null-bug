export interface Env {
	DB: D1Database
}

export default {
	async fetch(
		request: Request,
		env: Env,
	): Promise<Response> {
		if (request.url.includes("favicon.ico")) return new Response("", { status: 404 });

		console.log("Creating table")
		await env.DB.exec("CREATE TABLE IF NOT EXISTS TEST (field TEXT)")
		console.log("Created table\n\n")

		console.log("Inserting row")
		const stmt = env.DB.prepare("INSERT INTO TEST (field) VALUES (?)")
			.bind(null);
		await stmt.run();
		console.log("Inserted row\n\n")

		console.log("Selecting rows")
		const rows = await env.DB.prepare("SELECT * FROM TEST").all();
		console.log("Selected rows\n\n")
		console.log(JSON.stringify(rows));
		return Response.json(rows);
	},
};

