/// <reference types="@sveltejs/kit" />

type Todo = {
  uid: string,
  create_at: Date;
  update_at: Date;
  text: string;
  done: boolean;
}