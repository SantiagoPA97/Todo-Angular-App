import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { setFilter, validFilters } from '../../filtro/filtro.actions';
import { clearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [
  ]
})
export class TodoFooterComponent implements OnInit {

  currentFilter: validFilters = 'all';
  filters: validFilters[] = ['all', 'completed', 'active'];

  active: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filter').subscribe(filter => this.currentFilter = filter);
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.active = state.todos.filter(todo => !todo.completado).length;
    });
  }

  changeFilter(filter: validFilters) {
    this.store.dispatch(setFilter({ filter }));
  }

  clearCompleted() {
    this.store.dispatch(clearCompleted());
  }

}
