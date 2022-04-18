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
    '[TODO] Edite TODO',
    props<{id: number, texto: string}>()    
);

export const eliminar = createAction(
    '[TODO] Delete TODO',
    props<{id: number}>()    
);

export const toggleAll = createAction(
    '[TODO] ToggleAll TODO',
    props<{completado: boolean}>()    
);

export const clearCompleted = createAction(
    '[TODO] Clean Completed',
);