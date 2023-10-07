import type { RequestHandler } from '@sveltejs/kit';

import { api } from './_api';

export const get: RequestHandler = (request) => {
	return api(request);
};

export const post: RequestHandler<{}, FormData> = (request) => {
	const todo: Todo = {
		uid: `${Date.now()}`, // TODO: Replace with the UID from database
		create_at: new Date(),
		update_at: new Date(),
		text: request.body.get('text'),
		done: false
	};

	return api(request, todo)
};
