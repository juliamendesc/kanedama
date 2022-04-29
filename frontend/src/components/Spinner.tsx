import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid ${({ theme }) => theme.colors.mansaPurple};
  background: transparent;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 50vh auto;
`;

export default Spinner;
