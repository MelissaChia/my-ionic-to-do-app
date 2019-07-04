import { Component, OnInit } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";

@Component({
  selector: "app-add",
  templateUrl: "./add.page.html",
  styleUrls: ["./add.page.scss"]
})
export class AddPage implements OnInit {
  data = {
    name: "",
    description: "",
    place: "",
    completed: false
  };

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  closePressed() {
    this.modalCtrl.dismiss();
  }

  async addPressed() {
    if (this.data.name) {
      this.modalCtrl.dismiss({
        newtodo: this.data
      });
    } else {
      //show toast
      let toast = await this.toastCtrl.create({
        duration: 2000,
        message: "Please fill in the blanks"
      });
      toast.present();
    }
  }
}
