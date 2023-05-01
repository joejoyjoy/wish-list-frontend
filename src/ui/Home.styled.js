import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 25px;

  @media only screen and (max-width: 500px)  {
    padding: 0 5px;
  }
`

export const Loader = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export const Loading = styled.div`
  $colors: #465902, #CFFF47, #363636, #F2F2F2, #FB6362;
  display: flex;
`

export const wave = keyframes`
	50%, 75% {
		transform: scale(2.5);
	}

	80%, 100% {
		opacity: 0;
	}
`

export const Dot = styled.div`
  position: relative;
  width: 2em;
  height: 2em;
  margin: 0.8em;
  border-radius: 50%;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    animation: ${wave} 2s ease-out infinite;
  }

 &:nth-child(1) {
	background: #465902;
}
 &:nth-child(1)::before {
	animation-delay: 0.2s;
}
 &:nth-child(2) {
	background: #cfff47;
}
 &:nth-child(2)::before {
	animation-delay: 0.4s;
}
 &:nth-child(3) {
	background: #363636;
}
 &:nth-child(3)::before {
	animation-delay: 0.6s;
}
 &:nth-child(4) {
	background: #f2f2f2;
}
 &:nth-child(4)::before {
	animation-delay: 0.8s;
}
 &:nth-child(5) {
	background: #fb6362;
}
 &:nth-child(5)::before {
	animation-delay: 1s;
}
`