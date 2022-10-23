import PropTypes from 'prop-types';
import { UserData, UserSpan } from './User.styled';

export const User = ({ name, email }) => {
  const isTrue = email.endsWith('biz');
  return (
    <>
      <UserData>
        Name: <UserSpan>{name}</UserSpan>
      </UserData>
      <UserData>
        Email: <UserSpan isRed={isTrue}>{email}</UserSpan>
      </UserData>
    </>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
