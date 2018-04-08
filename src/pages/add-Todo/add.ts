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

    constructor(public navCtrl: NavController, private todoService: TodoService, private fb: FormBuilder) {
        this.authForm = this.fb.group({
            'title': ['', Validators.required],
            'priority': ['', Validators.required],
            'description': ['', Validators.required]
        });
    }

    //this function is called when the user clicks the add button in the add page
    onSubmit(){
        var todo = this.authForm.value;
            
        this.todoService.addTodo(todo).subscribe(data => {
            this.result = data;
            this.navCtrl.popTo(TodosPage);
            //this.navCtrl.push(TodosPage);
            //this.navCtrl.popToRoot(TodosPage);
        });
        //console.log(this.authForm.value);   
    }
}
