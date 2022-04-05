import { createReducer, on } from '@ngrx/store';
import { createToDo, editar, toggle } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Ponerse traje Ironman')
];

export const toDoReducer = createReducer(
  initialState,
  on(createToDo, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggle, (state, { id }) => {
    return state.map(todo => {

      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      }
      return todo;
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map(todo => {

      if (todo.id === id) {
        return {
          ...todo,
          texto
        }
      }
      return todo;
    });
  })
);