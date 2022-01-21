/**
 * @class DataService
 *
 * Manage data from user, replied data, and transfer local data to localStrorage
 */
// import { getSampleComment } from "./sampleData/getSampleComment";

import datas from "../data/sample.json";
import { CommentData } from "../models/comment.model";

export class DataService {
  public commentData: CommentData[]
  public userComment: CommentData[];
  constructor() {
    this.commentData = this.dataToShow()

    const parsedUserComment: CommentData[] = JSON.parse(localStorage.getItem("userComments")) || []
    this.userComment = parsedUserComment.map(data => new CommentData(data))
    localStorage.length == 0 && this.bindSampleData()
  }


  bindSampleData(): void {
    const sampleData = datas.comments;
    sampleData.forEach((data) => {
      const bindThisData = new CommentData({
        commentId: data.id,
        username: data.user.username,
        imagePath: data.user.image.png,
        message: data.content,
        score: data.score,
        replies: data.replies,
      })
      // this.commentData.push(bindThisData)
      const id = bindThisData.commentId.toString()
      const convertedData = JSON.stringify(bindThisData)
      localStorage.setItem(id, convertedData)
      console.log(bindThisData)
    });
  }
  public bindUserComment(data: CommentData[]): void {
    const convertedData = JSON.stringify(data)
    localStorage.setItem("userComments", convertedData)
  }

  // public getComments():CommentData[] {
  //   const data = localStorage.getItem()
  //   return []
  // }

  // public addComment(comment:CommentData) {

  // }

  private dataToShow(): CommentData[] {
    const datasFromLocalStorage: CommentData[] = this.getDataFromStorage()
    return datasFromLocalStorage.map(data => {
      const currentTime = Date.now()
      const previousTime = parseInt(data.createAt)

      const relativeTime = this.relativeTime(currentTime, previousTime)
      data.createAt = relativeTime
      return data
    })
  }

  private getDataFromStorage(): CommentData[] {
    let values = []
    const keys = Object.keys(localStorage)
    let i = keys.length

    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])))
    }
    return values
  }

  private relativeTime(current: number, previous: number): string {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerWeek = msPerDay * 7
    const msPerMonth = msPerWeek * 4;
    const msPerYear = msPerDay * 365;

    const elapsed = current - previous;

    if (elapsed < msPerMinute || elapsed < 0) {
      return "just now";
    }

    else if (elapsed < msPerHour) {
      return Math.floor(elapsed / msPerMinute) + ' minutes ago';
    }

    else if (elapsed < msPerDay) {
      return Math.floor(elapsed / msPerHour) + ' hours ago';
    }

    else if (elapsed < msPerMonth) {
      return 'approximately ' + Math.floor(elapsed / msPerDay) + ' days ago';
    }

    else if (elapsed < msPerYear) {
      return 'approximately ' + Math.floor(elapsed / msPerMonth) + ' months ago';
    }

    else {
      return 'approximately ' + Math.floor(elapsed / msPerYear) + ' years ago';
    }
  }
}
