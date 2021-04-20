import styled from 'styled-components';

const TrackList = styled.section`
  h1 {
    font-weight: 800;
    margin-bottom: 35px;
  }

  .MuiPaper-root {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  .MuiCardHeader-root {
    margin-bottom: 20px;
    padding: 0;

    .MuiCardHeader-subheader {
      color: ${({ theme }) => theme.palette.secondary.main};
    }
  }

  .MuiCardMedia-root {
    border-radius: 15px;
    padding-top: 72%;
  }

  .MuiCardActions-root {
    padding: 0;
    margin-top: 20px;

    .MuiButton-root {
      border-width: 2px;
      color: ${({ theme }) => theme.palette.text.primary};
      font-size: 1rem;
      text-transform: none;
    }

    .MuiButton-outlinedPrimary:hover {
      background-color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

const Styled = { TrackList };

export default Styled;
