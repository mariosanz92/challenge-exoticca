import styled from 'styled-components';
import device from '../../breakpoints';

export const Container = styled.div`
  background-color: rgba(214, 199, 182, 0.2);
  margin: 2rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  font-family: 'Red Hat Text', sans-serif;
`;

export const Image = styled.img<{ url: { mobile: string; tablet: string; desktop: string } }>`
  border-radius: 0.5rem 0.5rem 0rem 0rem;
  width: 12rem;
  height: 12rem;
  object-fit: cover;
  background-image: ${(props) => `url(${props.url.mobile})}`};

  @media ${device.tablet} {
    width: 20rem;
    height: 20rem;
    background-image: ${(props) => `url(${props.url.tablet})}`};
  }
  @media ${device.laptop} {
    background-image: ${(props) => `url(${props.url.desktop})}`};
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
`;
export const Days = styled.p`
  color: white;
  margin-left: 0.5rem;
`;

export const Country = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: white;
  margin-left: 0.5rem;
  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

export const OldPrice = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-decoration: line-through;
`;

export const NewPrice = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const ContentPrice = styled.div`
  display: flex;
  column-gap: 0.3rem;
  align-items: flex-end;
`;

export const Content = styled.div`
  position: relative;
`;
export const Wrapper = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0));
`;

export const Percentage = styled.div`
  position: absolute;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: black;
  border-radius: 0.5rem;
  color: rgb(232, 203, 145); ;
`;
