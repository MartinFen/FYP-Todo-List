import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import  "rxjs/Rx";

@Injectable()
export class TodoService{
    http:any;
    apiKey: String;
    TodosUrl: String;

    constructor(http:Http){
        this.http = http;
        this.apiKey = 'VsOmLzX82en7icOW1YvhJ3be96QHLd14';
        this.TodosUrl = 'https://api.mlab.com/api/1/databases/mytododb/collections/Todos';
    }
    //get method for pulling data from the Db
    getTodos(){
        return this.http.get(this.TodosUrl+'?apiKey='+this.apiKey).map(res => res.json());//returns JSON
    }

    addTodo(todo) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.TodosUrl + '?apiKey=' + this.apiKey,
            JSON.stringify(todo), { headers: headers })
            .map(res => res.json());
    }
}