import css from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  const handleFeedback = feedbackType => {
    updateFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  return (
    <div>
      <button onClick={() => handleFeedback('good')}>Good</button>
      <button onClick={() => handleFeedback('neutral')}>Neutral</button>
      <button onClick={() => handleFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
