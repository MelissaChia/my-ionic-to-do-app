import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AddPage } from "../add/add.page";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
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

  constructor(public modalController: ModalController) {}
  async presentModal() {
    const modal = await this.modalController.create({
      component: AddPage
    });

    modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data);
    this.todos.push(data.newtodo);
  }
}
