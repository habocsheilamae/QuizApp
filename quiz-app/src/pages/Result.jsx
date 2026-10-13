import { useLocation, useNavigate, Navigate } from "react-router-dom";
import ResultCard from "../components/ResultCard";

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // If someone opens /result directly, send them home
  if (!state) return <Navigate to="/" />;

  return (
    <div className="page">
      <ResultCard
        score={state.score}
        total={state.total}
        onRetake={() => navigate("/quiz")}
        onHome={() => navigate("/")}
      />
    </div>
  );
}