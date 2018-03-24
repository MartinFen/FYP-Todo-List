import { Component } from '@angular/core';

import { TodosPage } from '../todos/todos';
import { AboutPage } from '../about/about';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  //the code below is how the tabs know which page to navigate to
  tab1Root = TodosPage;
  tab3Root = AboutPage;

  constructor() {
  }
}
