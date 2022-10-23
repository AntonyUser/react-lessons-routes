import styled from 'styled-components';

// export const UserSpan = styled.span`
//   background-color: #ccc;
// `;

// export const UserData = styled.p`
//   color: tomato;

//   &:hover {
//     color: black;
//   }

//   &:hover ${UserSpan} {
//     background-color: coral;
//   }
// `;

export const UserData = styled.p`
  color: tomato;

  &:hover {
    color: black;
  }
`;

export const UserSpan = styled.span`
  background-color: #ccc;
  color: ${({ isRed }) => (isRed ? 'red' : 'blue')};

  ${UserData}:hover & {
    background-color: coral;
  }
`;
