import type { Request } from '@sveltejs/kit';

// TODO: add a database?
let todos: Array<Todo> = [];

export const api = (request: Request, data?: Record<string, unknown>) => {
	let body = {};
	let status = 500;

	switch (request.method.toUpperCase()) {
		case 'GET':
			body = todos;
			status = 200;
			break;

		case 'POST':
			todos.push(data as Todo);
			body = data;
			status = 201;
			break;

		case 'DELETE':
			todos = todos.filter((todo) => todo.uid !== request.params.uid);
			status = 200;
			break;

		case 'PATCH':
			todos = todos.map((todo) => {
				if (todo.uid === request.params.uid) {
					todo.text = data.text ? (data.text as string) : todo.text;
					if (data.done) {
						todo.done = !todo.done;
					}
					console.log({ data, todo });
				}
				return todo;
			});
			status = 200;
			body = todos.find((todo) => todo.uid === request.params.uid);
			break;

		default:
			break;
	}

	if (request.method.toUpperCase() !== 'GET' && request.headers.accept !== 'application/json') {
		return {
			status: 303,
			headers: {
				location: '/'
			}
		};
	}
	return { status, body };
};
