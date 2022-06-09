import { Question } from "./question.js";

export class MultipleChoice extends Question {
  renderContent() {
    return this.answers.reduce((previous, current) => {
      previous += `
        <div class="col-6">
            <div class="custom-control custom-radio">
            <input
                type="radio"
                class="custom-control-input"
                name="multiple-choice-${this.id}"
                value="${current.exact}"
                id='question-${this.id}-${current.id}'
            />
            <label class="custom-control-label" for='question-${this.id}-${current.id}'
                >${current.content}</label
            >
            </div>
        </div>
          `;

      return previous;
    }, ``);
  }

  getExact() {
    return document.querySelector(`input[name='multiple-choice-${this.id}']:checked`)?.value || false;
  }
}
