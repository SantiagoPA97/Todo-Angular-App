import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { validFilters } from '../filtro/filtro.actions';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilters): Todo[] {
    
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completado);

      case 'active':
        return todos.filter(todo => !todo.completado);
      default:
        return todos;
    }
  }

}
