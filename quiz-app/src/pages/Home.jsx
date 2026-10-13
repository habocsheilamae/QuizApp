import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="page home">
      <div className="home-content">
        <h2 className="welcome">Welcome to the</h2>
        <h1 className="title">Frontend Quiz!</h1>
        <p className="description">
          Test your knowledge of HTML, CSS, JavaScript and React with 10 multiple-choice questions.
        </p>
        <button className="btn" onClick={() => navigate("/quiz")}>Start Quiz</button>
      </div>
    </div>
  );
}