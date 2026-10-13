export default function QuizHeader({ current, total }) {
  return (
    <div className="quiz-header">
      <p className="subtitle">Frontend Quiz</p>
      <h2>Question {current} of {total}</h2>
    </div>
  );
}