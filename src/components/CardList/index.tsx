import { useState, useRef, useLayoutEffect } from 'react';
import { card } from '../../types';
import Card from '../Card';
import { Container, Title, Button, Slide, Text } from './CardList.styled';

type CardListProps = {
  cards: card[];
  title: string;
  description: string;
};
const CardList = ({ cards, title, description }: CardListProps) => {
  const SLIDE_NUMBER = 600;
  const [move, setMove] = useState(0);
  const [isScrollable, setIsScrollable] = useState(true);
  const ref = useRef<HTMLDivElement | null>(null);

  const scroll = (shift: number) => {
    ref.current!.scrollLeft += shift;
    setMove(move + shift);
  };

  useLayoutEffect(() => {
    if (ref.current!.offsetWidth >= ref.current!.scrollWidth) {
      setIsScrollable(false);
    }
  }, []);

  return (
    <>
      <Title dangerouslySetInnerHTML={{ __html: title }} />
      <Text>{description}</Text>
      <Container>
        {isScrollable && <Button onClick={() => scroll(-SLIDE_NUMBER)}> &#10094;</Button>}
        <Slide ref={ref}>
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </Slide>
        {isScrollable && (
          <Button positionRight onClick={() => scroll(+SLIDE_NUMBER)}>
            &#10095;
          </Button>
        )}
      </Container>
    </>
  );
};

export default CardList;
