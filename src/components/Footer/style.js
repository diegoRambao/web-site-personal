import styled from 'styled-components'

export const FooterContainer = styled.footer`
   margin-top: 170px;
   padding: 26px;
   background: ${(props) => (props.theme === true ? '#2b2b2b' : '#5340ff')};

   .container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 600px) {
         flex-direction: column;
         gap: 20px;
      }
   }

   .footer-Copyright {
      font-weight: 700;
      color: #f8f8f8;
   }

   .footer-socialmedia {
      display: flex;
      align-items: center;
      gap: 20px;
   }

   .link-social-media {
      color: #f8f8f8;
   }
`
