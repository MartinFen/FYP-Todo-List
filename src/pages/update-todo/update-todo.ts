import { StatusBar } from '@ionic-native/status-bar';
import { TodoService } from './../../app/services/todo.service';

import { TodosPage } from './../todos/todos';
import { TodoDetailsPage } from './../todo-details/todo-details';

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'update-todo',
    templateUrl: 'update-todo.html'
})
export class UpdateTodoPage {

    public todo: any;
    public result: String;
    public authForm: FormGroup;

    constructor(public navCtrl: NavController, public params: NavParams, private todoService: TodoService, public fb: FormBuilder) {
            this.todo = params.get('todo');
            this.authForm = this.fb.group
            ({
                title: [this.todo.title, Validators.required],
                priority: [this.todo.priority, Validators.required],
                description: [this.todo.description, Validators.required]
            });
            
    }

    onSubmit() {
        this.todo.title = this.authForm.controls.title.value;
        this.todo.priority = this.authForm.controls.priority.value;
        this.todo.description = this.authForm.controls.description.value;
        
        this.todoService.updateTodo(this.todo).subscribe(data => {
            this.result = data;
            //this.navCtrl.push(TodosPage);
            this.navCtrl.popTo(TodosPage);
        });
        console.log(this.authForm.value); 
    }
}
