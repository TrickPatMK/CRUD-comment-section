import { CommentData } from "../../models/comment.model";

export class CommentTemplate {
  /*
  private commentWrapper: HTMLElement;
  private commentProfile: HTMLElement;
  private profileImage: HTMLElement;
  private profileUsername: HTMLElement;
  private profileTimestamp: HTMLElement;
  private message: HTMLElement;
  private commentAction: HTMLElement;
  private actionUpvote: HTMLElement;
  private upvoteSVG: SVGElement;
  private upvotePath: SVGElement;
  private actionScore: HTMLElement;
  private actionDownvote: HTMLElement;
  private downvoteSVG: SVGElement;
  private downvotePath: SVGElement;
  private commentReply: HTMLElement;
  private replyBtn: HTMLElement;
  private replyTextSpan: HTMLElement;
  private replySVGSpan: SVGElement;
  private replyPath: SVGElement;
  */
  public commentTemplate: string

  constructor({
    commentId,
    username,
    createAt,
    imagePath,
    message,
    score,
    isUser
  }: CommentData) {
    /*
    // START: Profile
    this.profileImage = createElement({
      tag: "img",
      attr: {
        className: "comment__profile__image",
        alt: "profile-img",
        src: imagePath,
      },
    });

    this.profileUsername = createElement({
      tag: "h3",
      attr: { className: "comment__profile__username" },
    });
    this.profileUsername.textContent = username;

    this.profileTimestamp = createElement({
      tag: "p",
      attr: { className: "comment__profile__timestamp" },
    });
    // this.profileTimestamp.textContent =

    this.commentProfile = createElement({
      tag: "div",
      attr: { className: "comment__profile" },
    });
    this.profileImage.append(
      this.profileImage,
      this.profileUsername,
      this.profileTimestamp
    );
    // END: Profile

    // START: Message
    this.message = createElement({
      tag: "p",
      attr: { className: "comment__message" },
    });
    // END: Message

    // START: Action

    // START: Downvote
    this.downvotePath = createSVG({
      tag: "path",
      attr: {
        d: "M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z",
      },
    });

    this.downvoteSVG = createSVG({
      tag: "svg",
      attr: { width: 11, height: 3 },
    });
    this.downvoteSVG.append(this.downvotePath);

    this.actionDownvote = createElement({
      tag: "a",
      attr: {
        className: "comment__action__downvote",
      },
    });
    this.actionDownvote.append(this.downvoteSVG);
    // END: Downvote

    this.actionScore = createElement({
      tag: "p",
      attr: { className: "comment__action__score" },
    });
    this.actionScore.textContent = score.toString();

    // START: Upvote
    this.upvotePath = createSVG({
      tag: "path",
      attr: {
        d: "M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z",
      },
    });

    this.upvoteSVG = createSVG({
      tag: "svg",
      attr: { width: 11, height: 11 },
    });
    this.upvoteSVG.append(this.upvotePath);
    // END: Upvote

    this.actionUpvote = createElement({
      tag: "a",
      attr: { className: "comment__action__upvote" },
    });
    this.actionUpvote.append(this.upvoteSVG);

    this.commentAction = createElement({
      tag: "div",
      attr: { className: "comment__action" },
    });
    this.commentAction.append(
      this.actionUpvote,
      this.actionScore,
      this.actionDownvote
    );
    // END: Action

    // START: Reply
    this.replyPath = createSVG({
      tag: "path",
      attr: {
        d: "M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z",
        className: "comment__reply__btn__svg",
      },
    });

    this.replySVGSpan = createSVG({
      tag: "svg",
      attr: { width: 14, height: 13 },
    });
    this.replySVGSpan.append(this.replyPath);

    this.replyTextSpan = createElement({ tag: "span" });
    this.replyTextSpan.textContent = "Reply";

    this.replyBtn = createElement({
      tag: "a",
      attr: {
        className: "comment__reply__btn",
      },
    });
    this.replyBtn.append(this.replySVGSpan, this.replyTextSpan);

    this.commentReply = createElement({
      tag: "div",
      attr: { className: "comment__reply" },
    });
    this.commentReply.append(this.replyBtn);
    // END: Reply

    this.commentWrapper = createElement({
      tag: "div",
      attr: { className: "comment__wrapper", id: commentId },
    });
    this.commentWrapper.append(
      this.commentProfile,
      this.message,
      this.commentAction,
      this.commentReply
    );

    */

    // in the nutshell, render this things

    this.commentTemplate = `
    <div class="comment__wrapper" id=${commentId}>
      <div class="comment__profile">
        <img
          src=${imagePath}
          alt=""
          class="comment__profile__img"
        />
        <h3 class="comment__profile__username">${username}</h3>
        <p class="comment__profile__timestamp">${createAt}</p>
      </div>
      <p class="comment__message">
       ${message}
      </p>
      <div class="comment__action">
        <a class="comment__action__upvote"
          ><svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
            /></svg
        ></a>
        <p class="comment__action__score">${score}</p>
        <a class="comment__action__downvote"
          ><svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
            /></svg
        ></a>
      </div>
      ${isUser ? (`
        <div class="comment__edit">
          <a class="comment__edit__delete font-500"
            ><span
              ><svg
                width="12"
                height="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                  class="comment__edit__delete__svg"
                /></svg
            ></span>
            <span>Delete</span></a
          >
          <a class="comment__edit__btn font-500"
            ><span
              ><svg
                width="14"
                height="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                  class="comment__edit__btn__svg"
                /></svg
            ></span>
            <span>Edit</span></a
          >
        </div>
      `) : (`
        <div class="comment__reply">
          <a class="comment__reply__btn"
            ><span
              ><svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                  class="comment__reply__btn__svg"
                /></svg
            ></span>
            <span>Reply</span></a
          >
        </div>
      `)}
    </div>`
  }
}
