export type Todo = {
  id: number;
  title: string;
  done: boolean;
  userId?: number;
};

export type User = {
  id: number;
  name: string;
  email?: string;
};
