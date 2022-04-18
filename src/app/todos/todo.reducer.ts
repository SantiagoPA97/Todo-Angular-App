import { createReducer, on } from '@ngrx/store';
import { createToDo, editar, eliminar, toggle, toggleAll, clearCompleted } from './todo.actions';
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
  }),
  on(eliminar, (state, { id }) => {
    return state.filter(todo => todo.id !== id);
  }),
  on(toggleAll, (state, { completado }) => {
    return state.map(todo => {
      return {
        ...todo,
        completado
      }
    });
  }),
  on(clearCompleted, state => state.filter(todo => !todo.completado))
);