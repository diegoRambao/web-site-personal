import styled from 'styled-components'

export const SectionContact = styled.section`
   margin-top: 150px;

   @media (max-width: 600px) {
      .container {
         max-width: 94%;
      }
   }
`
export const ContainerContact = styled.div`
   margin-top: 80px;
   padding: 1.5rem;
   display: flex;
   justify-content: space-between;
   gap: 4rem;
   border-radius: 10px;
   background: ${(props) => (props.theme === true ? '#2b2b2b' : '#fff')};
   box-shadow: ${(props) => (props.theme === true ? '0 1.6rem 2.4rem rgb(0 0 0 / 25%);' : '2px 2px 50px rgb(0 0 0 / 15%)')};

   .contact-text {
      width: 50%;
      color: ${(props) => (props.theme === true ? '#f8f8f8' : '#414141')};
   }
   .title-contact-info {
      font-weight: 800;
   }

   .contact-info-description {
      font-size: 1em;
      margin-bottom: 3rem;
   }

   .contact-info-item {
      font-weight: 500;
      margin-bottom: 2rem;
      font-size: 1rem;
      display: flex;
      align-items: center;
      gap: 10px;
   }
   .container-social-media {
      display: flex;
      align-items: center;
      gap: 20px;
   }

   .link-social-media {
      color: ${(props) => (props.theme === true ? '#fff' : '#414141')};
   }

   .form-contact {
      width: 50%;
   }
   .container-input {
      width: 100%;
   }
   input,
   textarea {
      padding: 16px 20px;
      border-radius: 5px;
      background-color: rgb(234, 234, 234);
      border: none;
      margin: 10px 0px;
      width: -webkit-fill-available;
      outline: none;
      font-size: 100%;
   }
   .textarea-contact {
      margin: 10px 0px;
      height: 200px;
      resize: none;
   }
   .button-submit-contact {
      background: #5340ff;
      color: #fff;
      font-size: 1rem;
      font-weight: 700;
      width: 100%;
      border: 0px;
      border-radius: 8px;
      height: 46px;
      outline: none;
      cursor: pointer;
      margin-top: 0.625rem;
      max-width: 120px;
   }

   @media (max-width: 600px) {
      flex-direction: column;

      .form-contact {
         width: 100%;
      }

      .contact-text {
         width: 100%;
      }
   }
`
