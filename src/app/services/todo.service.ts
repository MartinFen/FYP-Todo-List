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

    getTodos(){
        return this.http.get(this.TodosUrl+'?apiKey='+this.apiKey).map(res => res.json());//returns JSON
    }
}