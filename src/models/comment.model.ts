/**
 * @class CommentModel
 * 
 * Manage the sample data of the app
 */

import { nanoid } from "nanoid"

export interface CommentDataInterface {
  commentId?: number | string,
  username: string,
  createAt?: string
  imagePath: string,
  message: string,
  score: number,
  replies?: Array<object>,
  replyTo?: string
  isUser?: boolean
}

export class CommentData {
  public commentId: number | string
  public username: string
  public createAt?: string
  public imagePath: string
  public message: string
  public score: number
  public replies: Array<object>
  public isUser?: boolean
  constructor({ commentId, username, createAt, imagePath, message, score, replies, isUser }: CommentDataInterface = {
    commentId: null,
    username: "",
    imagePath: "",
    message: "",
    score: 0,
    isUser: false
  }) {
    this.commentId = commentId || nanoid()
    this.username = username
    this.createAt = createAt || this._createAt();
    this.imagePath = imagePath
    this.message = message
    this.score = score
    this.replies = replies
    this.isUser = isUser
  }

  private _createAt(): string {
    const currentDate = Date.now()
    return currentDate.toString()

  }
}