import styled from 'styled-components';

const TrackCard = styled.section`
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

const TrackCardInfo = styled.section`
  display: flex;
  flex-direction: column;

  .MuiTypography-body2,
  .MuiTypography-caption {
    margin-right: ${({ theme }) => theme.spacing(1)}px;
  }

  .MuiTypography-caption:last-of-type {
    margin-right: 0;
  }

  .MuiTypography-caption {
    align-items: center;
    color: ${({ theme }) => theme.palette.text.secondary};
    display: inline-flex;
    font-size: 10px;
    line-height: 20px;
  }

  .info-line-1 {
    display: inline-flex;
  }

  .info-line-2 {
    display: inline-flex;

    .MuiSvgIcon-root {
      font-size: 14px;
      margin-right: 5px;
    }
  }
`;

const Styled = { TrackCard, TrackCardInfo };

export default Styled;
