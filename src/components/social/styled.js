import styled from "styled-components";

export const SocialContainer = styled.div`
 margin: 10px;
 display: flex;
 justify-content: center;
 align-items: spaced-evenly;

 a {
   color: ${({theme}) => theme.text};
   padding: 0 6px;
   margin: 0 2px;
   font-size: 22px;
   &:hover {
     color: ${({theme}) => theme.accent}
   }
 }
`;