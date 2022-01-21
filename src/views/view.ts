import { CommentData } from "../models/comment.model";
import { CommentTemplate } from "./components/CommentTemplate";
import { UserInputField } from "./components/UserInputField";
import { createHTMLElement } from "./functions/create";

export class View {
  private root: HTMLElement
  private commentSection: HTMLElement

  constructor() {
    this.root = document.querySelector('#root')
    this.commentSection = createHTMLElement(
      "section", {
      id: "comment",
      class: "container comment"
    }
    )
    this.root.append(this.commentSection)
  }

  public display(datas: CommentData[], user: string): void {
    const commentSection = document.querySelector("#comment")
    datas.map(data => {
      const comment = new CommentTemplate(data)
      commentSection.innerHTML += comment.commentTemplate
    })
    const userInput = new UserInputField(user)
    commentSection.append(userInput.user)
  }
}