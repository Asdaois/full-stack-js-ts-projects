import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ request, resolve }) => {

	if (request.query.has('_method')) request.method = request.query.get('_method').toUpperCase();
  console.log(request.method)
	const response = await resolve(request);
	return response;
};
