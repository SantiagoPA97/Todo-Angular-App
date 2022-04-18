import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.model';
import { toDoReducer } from './todos/todo.reducer';
import { filterReducer } from './filtro/filtro.reducer';
import { validFilters } from './filtro/filtro.actions';
export interface AppState {
    todos: Todo[],
    filter: validFilters
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: toDoReducer,
    filter: filterReducer
}     