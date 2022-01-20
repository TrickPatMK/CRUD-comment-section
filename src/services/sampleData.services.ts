/**
 * @class DataService
 *
 * Manage sample data, data from user, replied data, and transfer local data to localStrorage
 */

import datas from "../data/sample.json";
import { CommentData } from "../models/comment.model";
// import { getSampleComment } from "./sampleData/getSampleComment";

export class SampleDataServices {
  constructor() { }

  bindSampleData(): void {
    if (localStorage.length == 0) {
      // const sampleData = datas.comments
      // sampleData.forEach(data => {
      //   const id = data.id.toString()
      //   const dataToJSON = JSON.stringify(data)
      //   localStorage.setItem(id, dataToJSON)
      const sampleData = datas.comments;
      sampleData.forEach((data) => {
        const bindThisData = new CommentData({
          commentId: data.id,
          username: data.user.username,
          imagePath: data.user.image.png,
          message: data.content,
          score: data.score,
          replies: data.replies
        })
        const id = bindThisData.commentId.toString()
        const dataToString = JSON.stringify(bindThisData)

        localStorage.setItem(id, dataToString)
      });
    }
  }
}
