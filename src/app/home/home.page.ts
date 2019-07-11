import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AddPage } from "../add/add.page";
import { DataService } from "../data.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  todos = [];

  constructor(
    public modalController: ModalController,
    public dataService: DataService
  ) {}

  ngOnInit() {
    this.todos = this.dataService.getAllItems();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddPage
    });

    modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data);
    this.dataService.addItem(data);
    this.todos.push(data.newtodo);
  }

  markDone(todo) {
    console.log("this is done");
    todo.completed = true;
  }
  notDone(todo) {
    console.log("undo");
    todo.completed = false;
  }
  delete(i) {
    console.log("delete");
    this.todos.splice(i, 1);
  }
}
