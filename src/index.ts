/**
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - npx wrangler login for authenticating with wrangler first via cloudflare website
 * - Run `npm run deploy` to publish your worker
 * - https://cf-serverless.shubham-kumar10102.workers.dev => deployed url
 *
 */

// Basic Example :

// export default {
// 	async fetch(request, env, ctx): Promise<Response> {
// 		return new Response('Hello World! - Shubham');
// 	},
// } satisfies ExportedHandler<Env>;

// Routing Basics : (very odd way/approach 😅)  : Use frameworks maybe (HONO)

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);

		if (request.method === 'GET') {
			return Response.json({
				message: 'you sent a get request',
			});
		} else {
			return Response.json({
				message: 'you did not send a get request',
			});
		}
	},
};
