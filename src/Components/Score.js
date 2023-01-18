import "./Score.css";

const Score = (props) => {
  return (
    <div className="score">
      <button className="score-button">{`Score: ${props.score}`}</button>
      <button className="high-score-button">{`High Score: ${props.highScore}`}</button>
      <button className="max-score-button">Max Score: 8</button>
    </div>
  );
};

export default Score;
