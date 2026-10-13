import AnswerOption from "./AnswerOption";

export default function QuestionCard({ data, number, selected, onSelect, onNext, isLast }) {
  return (
    <div className="card">
      <h3 className="card-title">Questions:</h3>
      <hr className="divider" />

      <p className="q-text">
        <span className="q-num">{number}.</span> {data.question}{" "}
        <span className="required">*</span>
      </p>

      <div className="answers" role="radiogroup">
        {data.choices.map((choice, index) => (
          <AnswerOption
            key={index}
            name={`question-${data.id}`}
            text={choice}
            selected={selected === index}
            onSelect={() => onSelect(index)}
          />
        ))}
      </div>

      <div className="card-footer">
        <button className="btn" onClick={onNext} disabled={selected === null}>
          {isLast ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}