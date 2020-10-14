import styled from 'styled-components';

export const Loader = styled.div`
  display: inline-block;
  font-size: 1.25em;
  opacity: ${props => props.isLoading ? '100%' : '0%' };
  position: relative;
	width: 234px;
	margin: auto;
`;

export const Bar = styled.div`
  position: absolute;
	top: 0;
	background-color: rgb(0,0,0);
	width: 28px;
	height: 28px;
	animation-name: bounce;
	animation-duration: 1.5s;
	animation-iteration-count: infinite;
	animation-direction: normal;
  transform: scale(.3);
  
  &.bar-1 {
    left:0;
    animation-delay:0.6s;
  }

  &.bar-2 {
    left: 29px;
    animation-delay: 0.75s;
  }

  &.bar-3 {
    left: 58px;
    animation-delay: 0.9s;
  }

  &.bar-4 {
    left: 88px;
    animation-delay: 1.05s;
  }

  &.bar-5 {
    left: 117px;
    animation-delay: 1.2s;
  }

  &.bar-6 {
    left: 146px;
    animation-delay: 1.35s;
  }

  &.bar-7 {
    left: 175px;
    animation-delay: 1.5s;
  }

  &.bar-8 {
    left: 205px;
    animation-delay: 1.64s;
  }
`;
