import { Question } from "./question";

export class MultipleChoice extends Question {
  renderAnswers() {
    return this.answers.reduce((previous, current) => {
      previous += `
        <div class="col-6">
            <div class="custom-control custom-radio">
            <input
                type="radio"
                class="custom-control-input"
                name="multiple-choice"
                onclick="changeExact(${current.exact})"
                id=`question-${current.id}`
            />
            <label class="custom-control-label" for=`question-${current.id}`
                >${current.content}</label
            >
            </div>
        </div>
          `;

      return previous;
    }, ``);
  }

  changeExact(exact) {
    this.exact = exact
  }

  render() {
    return `
        <div class="quiz__content">
            <div class="quiz__header">
                <p>${this.content}:</p>
            </div>
            <div class="quiz__body row">
                ${this.renderAnswers()}
            </div>
         </div>  
      `;
  }
}
