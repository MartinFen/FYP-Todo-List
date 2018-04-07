import { Component } from '@angular/core';

import { TodosPage } from '../todos/todos';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  //the code below is how the tabs know which page to navigate to
  tab1Root = TodosPage;

  constructor() {
  }
}
