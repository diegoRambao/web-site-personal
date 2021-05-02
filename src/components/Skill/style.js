import styled from 'styled-components'

export const SectionSkill = styled.section`
   margin-top: 250px;
   position: relative;

   @media (max-width: 700px) {
      margin-top: 100px;
   }
`

export const ContainerSkill = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   -webkit-box-align: center;
   margin-top: 120px;
   flex-wrap: wrap;
`

export const IconSkill = styled.img`
   width: 5em;
`
export const ContainerSkillWords = styled.div`
   @media (max-width: 700px) {
      display: none;
   }
`
export const SkillWord = styled.p`
   position: absolute;
   color: ${(props) => (props.theme === true ? '#989898' : 'rgba(94, 76, 255, 0.46)')};
   z-index: -1;
   left: 0px;
   right: 0px;
   font-weight: 900;
   top: ${(props) => props.top};
   left: ${(props) => props.left};
   font-size: ${(props) => props.fontSize};
`
