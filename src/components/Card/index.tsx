import { card } from '../../types';
import {
  Container,
  Image,
  OldPrice,
  ContentPrice,
  Text,
  NewPrice,
  Content,
  Percentage,
  Wrapper,
  Days,
  Country,
} from './Card.styled';

type CardProps = {
  card: card;
};
const Card = ({ card }: CardProps) => {
  const isPercentageApply = card.priceDetail.pricingPercentage !== 0;

  return (
    <Container>
      <Content>
        {isPercentageApply && <Percentage>-{card.priceDetail.pricingPercentage}%</Percentage>}
        <Wrapper>
          <Country>{card.destination}</Country>
          <Days>{card.days} days</Days>
        </Wrapper>
        <Image url={card.images[0]} />
      </Content>
      <Text>{card.title}</Text>
      <ContentPrice>
        <Text>From</Text>
        <OldPrice>{card.priceDetail.oldPriceBeautify}</OldPrice>
        <NewPrice>{card.priceDetail.fromPriceBeautify}</NewPrice>
      </ContentPrice>
    </Container>
  );
};

export default Card;
