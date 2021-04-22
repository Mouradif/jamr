import styled from 'styled-components';

const NavMenu = styled.section`
  .MuiButton-root {
    color: ${({ theme }) => theme.palette.text.secondary};
    text-transform: none;

    svg {
      fill: ${({ theme }) => theme.palette.text.secondary};
    }

    .MuiButton-label {
      font-size: 1rem;
    }
  }
  .MuiButton-root.active {
    border-radius: 0;
    color: ${({ theme }) => theme.palette.text.primary};

    svg {
      fill: ${({ theme }) => theme.palette.text.secondary};
    }
  }
`;

const Styled = { NavMenu };

export default Styled;
