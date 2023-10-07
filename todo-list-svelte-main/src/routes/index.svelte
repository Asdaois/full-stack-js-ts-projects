<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/todos.json');

		if (res.ok) {
			const todos = await res.json();
			return {
				props: { todos }
			};
		}

		const { message } = await res.json();
		return {
			error: new Error(message)
		};
	};
</script>

<script lang="ts">
	import TodoItem from '$lib/todo-item.svelte';
	import { each } from 'svelte/internal';
	import { enhance } from '$lib/actions/form';

	export let todos: Array<Todo>;

	const title = 'Todo';

	const processNewTodoResult = async (res: Response, form: HTMLFormElement) => {
		const newTodo = await res.json();
		todos = [...todos, newTodo];

		form.reset();
	};

	const processUpdateTodoResult = async (res: Response) => {
		const updatedTodo = await res.json();
		todos = todos.map((todo) => (todo.uid === updatedTodo.uid ? updatedTodo : todo));
	};
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="todos">
	<h1>{title}</h1>

	<form
		class="new"
		action="/todos.json"
		method="post"
		use:enhance={{ result: processNewTodoResult }}
	>
		<input type="text" name="text" aria-label="Add a todo" placeholder="+ type to add a todo" />
	</form>

	{#each todos as todo}
		<TodoItem
			{todo}
			processDeleteOnTodoResult={() => {
				todos = todos.filter((currentTodo) => todo.uid !== currentTodo.uid);
			}}
			{processUpdateTodoResult}
		/>
	{/each}
</div>

<style>
	.todos {
		width: 100%;
		max-width: 42rem;
		margin: 4rem auto;
	}

	.new {
		margin: 0 0 0.5rem 0;
	}

	.new input {
		font-size: 1.5rem;
		width: 100%;
		padding: 0.5rem 1rem 0.3rem 1rem;
		box-sizing: border-box;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 0.5rem;
		text-align: center;
	}

	.todos :global(input) {
		border: 0.1rem solid transparent;
	}

	.todos :global(input:focus-visible) {
		box-shadow: inset 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.1);
		border: 0.1rem solid #ff3e00 !important;
		outline: none;
	}
</style>
