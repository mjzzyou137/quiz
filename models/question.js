export class Question {
  constructor(question) {
    const { id, questionType, content, answers, isLast } = question;

    this.id = id;
    this.questionType = questionType;
    this.content = content;
    this.answers = answers;
    this.isLast = isLast;
  }

  renderContent() {
    return ``
  }

  render() {
    return `
      <div class="quizSection" id="quizSection-${this.id}">
        <div class="quiz__main">
          <div class="quiz__header">
          <p>${this.content}</p>
          </div>
          <div class="quiz__body row">
              ${this.renderContent()}
           </div>
          <div class="quiz__footer text-center">
            <span>Question ${this.id} of 8</span>
            <a id="${this.isLast && 'result'}" href="${this.isLast ? '#quizResult' : `#quizSection-${this.id + 1}`}" id="${this.isLast ? 'result' : ''}" class="quiz__btn">${this.isLast ? 'RESULT' : 'NEXT'}</a>
          </div>
        </div>
      </div>
    `
  }
}
