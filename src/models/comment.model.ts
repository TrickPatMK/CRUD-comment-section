/**
 * @class CommentModel
 * 
 * Manage the sample data of the app
 */

export interface CommentDataInterface {
  commentId: number,
  username: string,
  imagePath: string,
  message: string,
  score: number,
  replies?: Array<object>,
  replyTo?: string
  isUser?: boolean
}

export class CommentData {
  public commentId: number
  public username: string
  public createAt: object[]
  public imagePath: string
  public message: string
  public score: number
  public replies: Array<object>
  public isUser?: boolean
  constructor({ commentId, username, imagePath, message, score, replies }: CommentDataInterface = {
    commentId: 0,
    username: "",
    imagePath: "",
    message: "",
    score: 0,
  }) {
    this.commentId = commentId
    this.username = username
    this.createAt = this._createAt(); // destructurable
    this.imagePath = imagePath
    this.message = message
    this.score = score
    this.replies = replies
    this.isUser = false
  }

  private _createAt(): Array<object> {
    const currentDate = new Date()
    return [
      {
        time: {
          hours: currentDate.getHours(),
          minutes: currentDate.getMinutes(),
          seconds: currentDate.getSeconds()
        }
      },
      {
        date: {
          day: currentDate.getDate(),
          month: currentDate.getMonth() + 1,
          year: currentDate.getFullYear()
        }
      }
    ]
  }
}