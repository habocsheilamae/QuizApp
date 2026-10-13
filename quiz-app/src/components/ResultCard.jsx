export default function ResultCard({ score, total, onRetake, onHome }) {
  const incorrect = total - score;
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="result">
      <p className="subtitle">Quiz Completed</p>
      <h1>Your score:</h1>
      <div className="score-box">{score} / {total}</div>

      <ul className="stats">
        <li>Total questions: <strong>{total}</strong></li>
        <li>Correct answers: <strong>{score}</strong></li>
        <li>Incorrect answers: <strong>{incorrect}</strong></li>
        <li>Percentage: <strong>{percentage}%</strong></li>
      </ul>

      <div className="btn-row">
        <button className="btn" onClick={onRetake}>Retake Quiz</button>
        <button className="btn btn-outline" onClick={onHome}>Return Home</button>
      </div>
    </div>
  );
}