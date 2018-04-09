import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodosPage } from './../todos/todos';
import { TodoService } from './../../app/services/todo.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
    selector: 'add-Todo',
    templateUrl: 'add.html'
})
export class AddPage {

    private result: String;
    private authForm: FormGroup;

    //constructor with formBuilder validation set up for text inputs on add page
    constructor(public navCtrl: NavController, private todoService: TodoService, private fb: FormBuilder) {
        this.authForm = this.fb.group({
            'title': ['', Validators.required],
            'priority': ['', Validators.required],
            'description': ['', Validators.required]
        });
    }

    //this function is called when the user clicks the add button to submit the data in the add page
    //the function takes the values from the form and passes them to the database where a document is created using the addTodo() function in the provider class
    //the pages on the stack are then popped off it and the view is changed back to the Todos page
    onSubmit(){
        var todo = this.authForm.value;
            
        this.todoService.addTodo(todo).subscribe(data => {
            this.result = data;
            this.navCtrl.popTo(TodosPage);
        });  
    }
}
