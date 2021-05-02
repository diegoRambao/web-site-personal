import styled from 'styled-components'

export const ContainerTheme = styled.label`
   margin-left: 30px;
   &:hover {
      cursor: pointer;
   }
   .toggle-checkbox {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
   }

   .toggle-slot {
      position: relative;
      height: 30px;
      width: 62px;
      border: 1px solid #e4e7ec;
      border-radius: 10em;
      background-color: white;
      transition: background-color 250ms;
   }

   .toggle-checkbox:checked ~ .toggle-slot {
      background-color: #374151;
   }

   .toggle-button {
      transform: translate(5px, 5px);
      position: absolute;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: #ffeccf;
      box-shadow: inset 0px 0px 0px 0.75em #ffbb52;
      transition: background-color 250ms, border-color 250ms, transform 500ms cubic-bezier(0.26, 2, 0.46, 0.71);
   }

   .toggle-checkbox:checked ~ .toggle-slot .toggle-button {
      background-color: #485367;
      box-shadow: inset 0px 0px 0px 0.75em white;
      transform: translate(35px, 5px);
   }

   .toggle-checkbox:checked ~ .toggle-slot .moon-icon-wrapper {
      opacity: 1;
      transform: translate(35px, 5px) rotate(-15deg);
   }
`
