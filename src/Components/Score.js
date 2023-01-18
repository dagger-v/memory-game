const Score = (props) => {
  return (
    <div>
      <p>{`Score: ${props.score}`}</p>
      <p>{`High Score: ${props.highScore}`}</p>
      <p>Max Score: 10</p>
    </div>
  );
};

export default Score;
