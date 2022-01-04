import styled from "styled-components"

export const BackToTopButton = styled.button`
    position: fixed;
    background: ${({theme}) => theme.mainBackground};
    right: 30px;
		bottom: -40px;
		box-shadow: 0 0 2px 0;
		&.shown {
			bottom: 30px;
    }
`;