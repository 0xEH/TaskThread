import { atom } from 'recoil';

export interface NewTodo {
  title: string;
  description?: string;
  status: 'todo' | 'inProgress' | 'done';
  priority: 'low' | 'medium' | 'high';
}

export interface Todo {
  _id: string;
  title: string;
  description?: string;
  status: 'todo' | 'inProgress' | 'done';
  priority: 'low' | 'medium' | 'high';
}

export const newTodoState = atom<NewTodo>({
  key: 'newTodoState',
  default: {
    title: '',
    description: '',
    status: 'todo',
    priority: 'medium',
  },
});

export const todosState = atom<Todo[]>({
  key: 'todosState',
  default: [],
});

export const localeLang = atom({
  key: 'localeLang',
  default: 'en',
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      if (typeof window !== 'undefined' && window.localStorage) {
        const savedValue = localStorage.getItem('localeLang');
        if (savedValue != null) {
          setSelf(savedValue);
        }

        onSet((newValue) => {
          localStorage.setItem('localeLang', newValue);
        });
      }
    },
  ],
});
