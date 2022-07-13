import Card from '.';
import { render, screen } from '@testing-library/react';
import { card } from '../../types';

const aCard = {
  id: 1,
  title: 'title',
  destination: 'destination',
  images: [
    {
      desktop: 'https://d72z8785jvl84.cloudfront.net/img/p/10422/c253798.jpg',
      tablet: 'https://d72z8785jvl84.cloudfront.net/img/p/10422/c253798.jpg',
      mobile: 'https://d72z8785jvl84.cloudfront.net/img/p/10422/c253798.jpg',
    },
  ],
  days: 1,
  url: 'string',
  map: 'string',
  highlights: 'string',
  includes: 'string',
  priceDetail: {
    fromPrice: 10000,
    fromPriceBeautify: '10000',
    discountSaved: 1,
    oldPriceBeautify: 'string',
    pricingPercentage: 12,
    pricePerNight: 'string',
  },
  tags: 'string',
  crafterDetail: 'string',
  hasPrivateTour: false,
  hasSoloTraveller: false,
  headLine: null,
  tagHeadLine: 'string',
  isLandOnly: false,
  isValid: false,
  extraNights: 1,
};

describe('Card', () => {
  beforeEach(() => {
    render(<Card key={1} card={aCard as unknown as card} />);
  });

  test('renders a percentage', () => {
    const percentage = screen.getByText(/-12%/i);
    expect(percentage).toBeInTheDocument();
  });

  test('renders a country', () => {
    const country = screen.getByText(/destination/i);
    expect(country).toBeInTheDocument();
  });

  test('renders days', () => {
    const days = screen.getByText(/1 days/i);
    expect(days).toBeInTheDocument();
  });

  test('render price', () => {
    const prices = screen.getByText(/10000/i);
    expect(prices).toBeInTheDocument();
  });
});
