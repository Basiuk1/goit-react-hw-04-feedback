import PropTypes from 'prop-types';

import { NoFeedback } from './Notification.styled';
const Notification = ({ message }) => {
  return <NoFeedback>{message}</NoFeedback>;
};
export default Notification;

Notification.protoTypes = {
  message: PropTypes.string.isRequired,
};
