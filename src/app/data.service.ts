import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  todos = [
    {
      id: 1,
      name: "Buy Milk Tea",
      place: "Family Mart",
      description: "Buy 2 Milk Tea for myself",
      completed: false
    },
    {
      id: 2,
      name: "Buy a cake",
      place: "Secret Recipe",
      description: "Buy chololate flavour",
      completed: true
    },
    {
      id: 3,
      name: "Watch a movie",
      place: "Jaya TGV",
      description: "Spiderman Homecoming",
      completed: false
    },
    {
      id: 4,
      name: "Write a diary",
      place: "Home",
      description: "Write something about I learnt today",
      completed: false
    }
  ];

  constructor() {}

  addItem(todo) {
    this.todos.push(todo);
  }

  getAllItems() {
    return this.todos;
  }

  getItemById(id) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id == id) {
        return this.todos[i];
      }
    }
  }

  removeItem(i) {
    this.todos.splice(i, 1);
  }

  markItemDone(todo) {
    todo.completed = true;
  }
}
