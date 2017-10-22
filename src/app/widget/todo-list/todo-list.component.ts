import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../../shared/services/global-data/global-data.service';
import { DashboardData } from '../../shared/models/data.model';

@Component({
  selector: 'dashboard-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList:Array<DashboardData.TodoObj> = [];
  newTodoList:string = '';

  totalList: number = 0;
  checkedList: number = 0;
  urgentList: number = 0;
  isUrgent: boolean = false; 

  constructor(private globalData: GlobalDataService) { }

  ngOnInit() {
    this.todoList = this.globalData.todoList.slice(0);
    this.todoList.reverse();

    this.updateTodoList();
  }
  
  updateTodoList() {
    this.totalList = this.todoList.length;
    this.checkedList = (this.todoList.filter(item => {
      return item.isDone;
    })).length;
    this.urgentList = (this.todoList.filter(item => {
      return item.isUrgent;
    })).length;
    this.newTodoList = '';
  }

  addTodoList() {
    if(this.newTodoList == '') {
      return;
    }
    let tempArr = this.todoList.slice(0).reverse();
    let tempObj = {
      id: this.getHighestID() + 1,
      text: this.newTodoList,
      isDone: false,
      isUrgent: this.isUrgent
    }
    tempArr.push(tempObj);
    tempArr.reverse();
    this.todoList = tempArr;
    this.updateTodoList();
  }

  deleteTodoList(id: number) {
    let remove = (id) => {
      return this.todoList.filter((e, i) => i !== id);
    }
    let newArr = remove( this.getArrID(id) );
    this.todoList = newArr;
    this.updateTodoList();
  }

  checkTodoList(evt, id: number) {
    let isChecked = evt.srcElement.parentElement.classList.contains('checked');
    if(isChecked) {
      return;
    }
    this.todoList[this.getArrID(id)].isDone = true;
    this.updateTodoList();
  }

  getArrID(id) {
    return this.todoList.findIndex((item) => {
      return (item.id == id)
    });
  }

  getHighestID(): number {
    function compare(a, b) {
      if (a['id'] < b['id']) return -1;
      if (a['id'] > b['id']) return 1;
      return 0;
    }
    
    let arr = this.todoList; 
    arr.sort(compare);
    
    return arr[arr.length-1].id;
  }
  
}
