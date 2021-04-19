import styled from 'styled-components';

const Footer = styled.footer`
  background-color: ${({theme}) => theme.palette.background.paper};
  display: flex;

  .MuiToolbar-root {
    display: flex;
    justify-content: center;
    width: 100%;
    
    ${({theme})=> theme.breakpoints.up('sm')} {
      min-height: ${({theme}) => theme.spacing(10)}px;
    }

    p {
      font-size: 18px;
    }

    .toolbar-left, .toolbar-right {
      flex: 1;
    }

    .toolbar-right {
      text-align: right;
    }
  }
`;

const SocialIcons = styled.span`
  display: inline-flex;

  svg {
    fill: ${({theme}) => theme.palette.text.secondary};
    margin-right: ${({theme}) => theme.spacing(2)}px;
  }
`;

const Styled = { Footer, SocialIcons };

export default Styled;