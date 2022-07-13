import styled from 'styled-components';
import device from '../../breakpoints';

export const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  margin-left: 1rem;
  @media ${device.laptop} {
    font-size: 3rem;
  }
`;

export const Text = styled.p`
  font-family: 'Red Hat Text', sans-serif;
  margin-left: 1rem;
  font-size: 0.6rem;
  width: 20rem;
  @media ${device.laptop} {
    font-size: 1rem;
    width: 40rem;
  }
`;
export const Container = styled.div`
  position: relative;
`;

export const Slide = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;

  @media ${device.laptop} {
    overflow-x: hidden;
  }
`;

export const Button = styled.button<{ positionRight?: boolean }>`
  display: none;

  @media ${device.laptop} {
    display: block;
    position: absolute;
    bottom: 50%;
    right: ${(props) => props.positionRight && '0'};
    transform: ${(props) => (props.positionRight ? ' translateX(25%)' : 'translateX(-25%)')};
    z-index: 1;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: none;
    background-color: white;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;
