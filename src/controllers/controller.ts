import { CommentData } from "../models/comment.model";
import { DataService } from "../services/data.services";
import { View } from "../views/view";

export class Controller {
  constructor(private mainView: View, private mainService: DataService) {
    this.viewApp(this.mainService.commentData);
  }

  viewApp(datas: CommentData[]) {
    this.mainView.display(datas, "sek")
    console.log("im working now!")
  }
}