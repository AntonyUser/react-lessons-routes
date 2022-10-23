import { User } from 'components/User/User';
import PropTypes from 'prop-types';

export const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map(({ id, name, email }) => (
        <li key={id}>
          <User name={name} email={email} />
        </li>
      ))}
    </ul>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
