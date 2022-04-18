import { createAction, props } from '@ngrx/store';

export type validFilters = 'all' | 'completed' | 'active';

export const setFilter = createAction(
    '[Filtro] Set Filter',
    props<{filter: validFilters}>()    
);