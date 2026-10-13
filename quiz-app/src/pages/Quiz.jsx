import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";
import QuizHeader from "../components/QuizHeader";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";

export default function Quiz() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);     // current question
  const [selected, setSelected] = useState(null); // selected answer
  const [score, setScore] = useState(0);          // user's score

  const total = questions.length;
  const isLast = current === total - 1;

  const handleNext = () => {
    const isCorrect = selected === questions[current].answer;
    const newScore = isCorrect ? score + 1 : score;
    setScore(newScore);

    if (isLast) {
      // quiz completed -> go to result page
      navigate("/result", { state: { score: newScore, total } });
    } else {
      setCurrent(current + 1);
      setSelected(null);
    }
  };

  return (
    <div className="page">
      <div className="quiz-container">
        <QuizHeader current={current + 1} total={total} />
        <ProgressBar current={current + 1} total={total} />
        <QuestionCard
          key={current}
          data={questions[current]}
          number={current + 1}
          selected={selected}
          onSelect={setSelected}
          onNext={handleNext}
          isLast={isLast}
        />
      </div>
    </div>
  );
}