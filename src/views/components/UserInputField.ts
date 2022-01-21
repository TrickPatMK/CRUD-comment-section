import { createHTMLElement } from "../functions/create";

export class UserInputField {
  user: HTMLElement;
  imgWrapper: HTMLElement;
  userImg: HTMLElement;
  textArea: HTMLElement;
  submitBtn: HTMLElement;

  constructor(userImg: any) {
    // create element
    this.user = createHTMLElement('div', { class: 'user' })

    this.imgWrapper = createHTMLElement('figure', { class: 'user__img__wrapper' })

    this.userImg = createHTMLElement('img', { class: "user__img", src: userImg, alt: "" })

    this.textArea = createHTMLElement('textarea', { name: 'user__input', id: 'user__input', cols: 30, rows: 10, class: 'user__input font-400', placeholder: 'Add a comment...' })

    this.submitBtn = createHTMLElement('button', { class: 'btn btn--mod-blue user__cta' })
    this.submitBtn.textContent = "send"

    // append element
    this.imgWrapper.append(this.userImg)

    this.user.append(this.imgWrapper, this.textArea, this.submitBtn)
  }

  sendComment(): string {
    return (<HTMLInputElement>this.textArea).value
  }
}