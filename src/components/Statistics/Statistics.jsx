import Notification from 'components/Notification/Notification';
import { ListFeedback } from './Statistics.styled';
import PropTypes from 'prop-types';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total === 0) {
    return <Notification message={'There is no feedback'} />;
  }

  return (
    <div>
      <ListFeedback>Good: {good}</ListFeedback>
      <ListFeedback>Neutral: {neutral}</ListFeedback>
      <ListFeedback>Bad: {bad}</ListFeedback>
      <ListFeedback>Total: {total}</ListFeedback>
      <ListFeedback>Positive feedback: {positivePercentage}%</ListFeedback>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
