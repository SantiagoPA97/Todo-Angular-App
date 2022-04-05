import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [
  ]
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @ViewChild('input') txtInputFisico!: ElementRef;
  
  chkCompletado!: FormControl;
  txtInput!: FormControl;
  editando: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput      = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe(valor => {
      this.store.dispatch(actions.toggle({id: this.todo.id}));
    })
  }

  terminarEdicion() {
    this.editando = false;
    if (this.txtInput.valid || this.txtInput.value == this.todo.texto) {
      this.store.dispatch(actions.editar({id: this.todo.id, texto: this.txtInput.value}));
    }
    return;
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

}
