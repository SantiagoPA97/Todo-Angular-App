import { createAction, props } from '@ngrx/store';

export const createToDo = createAction(
    '[TODO] Create TODO',
    props<{texto: string}>()    
);

export const toggle = createAction(
    '[TODO] Toggle TODO',
    props<{id: number}>()    
);

export const editar = createAction(
    '[TODO] Editar TODO',
    props<{id: number, texto: string}>()    
);