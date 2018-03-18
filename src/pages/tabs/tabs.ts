import { Component } from '@angular/core';

import { TodosPage } from '../todos/todos';
import { AboutPage } from '../about/about';
import { AddPage } from '../add-Todo/add';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  //the code below is how the tabs know which page to navigate to
  tab1Root = TodosPage;
  tab2Root = AddPage;
  tab3Root = AboutPage;

  constructor() {
  }
}
