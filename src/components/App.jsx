import { User } from './User/User';
import { UsersList } from './UsersList/UsersList';
import { Section } from './Section/Section';
import { users } from 'data/users';
import { GlobalStyles } from 'utils/GlobalStyle';

const { name, email } = users[0];

export const App = () => {
  return (
    <>
      <Section>
        <User name={name} email={email} />
      </Section>
      <Section title="List of users">
        <UsersList users={users} />
      </Section>
      <GlobalStyles />
    </>
  );
};
