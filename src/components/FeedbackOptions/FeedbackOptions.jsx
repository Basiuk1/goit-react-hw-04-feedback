import PropTypes from 'prop-types';
import { ButtonContainer, ButtonFeedBack } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // console.log(options);
  return (
    <ButtonContainer>
      {options.map(option => (
        <ButtonFeedBack key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </ButtonFeedBack>
      ))}
    </ButtonContainer>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
