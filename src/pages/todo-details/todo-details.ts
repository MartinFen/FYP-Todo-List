import { TodoService } from './../../app/services/todo.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'todo-details',
    templateUrl: 'todo-details.html'
})
export class TodoDetailsPage {
    public todo:any;
    public result:any;
    
    constructor(public navCtrl: NavController, public params:NavParams, todoService:TodoService) {
        this.todo = params.get('todo');
        //console.log("debuging here");
    }

}
