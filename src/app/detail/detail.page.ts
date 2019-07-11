import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"]
})
export class DetailPage implements OnInit {
  item;

  constructor(public dataService: DataService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params["id"];
      console.log(id);
      this.item = this.dataService.getItemById(id);
      console.log(this.item);
    });
  }
}
