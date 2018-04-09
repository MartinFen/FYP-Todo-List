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

    //constructor that when called at the start of the class initilizing gets the selected todos values and sets them to the todo object in this class
    //the values are then passed into the the form
    constructor(public navCtrl: NavController, public params: NavParams, private todoService: TodoService, public fb: FormBuilder) {
            this.todo = params.get('todo');
            this.authForm = this.fb.group
            ({
                title: [this.todo.title, Validators.required],
                priority: [this.todo.priority, Validators.required],
                description: [this.todo.description, Validators.required]
            });
            
    }
    //when the user has clicked the update button the values in the form are added to the todo document and the updateTodo() function is used from the provider
    //the request set to the database is a put request which will update the selected todo document
    onSubmit() {
        this.todo.title = this.authForm.controls.title.value;
        this.todo.priority = this.authForm.controls.priority.value;
        this.todo.description = this.authForm.controls.description.value;
        
        this.todoService.updateTodo(this.todo).subscribe(data => {
            this.result = data;
            this.navCtrl.popTo(TodosPage);
        });
        //console.log(this.authForm.value); 
    }
}
