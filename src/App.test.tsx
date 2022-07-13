import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./useMarkets', () => ({
  __esModule: true,
  default: () => ({ market: marketSpain }),
}));

describe('App', () => {
  test('renders a title', () => {
    render(<App />);
    const title = screen.getByText(/home@sliders@shortTrips@title/i);
    expect(title).toBeInTheDocument();
  });

  test('renders a description', () => {
    render(<App />);
    const description = screen.getByText(/home@sliders@shortTrips@description/i);
    expect(description).toBeInTheDocument();
  });
  test('render a list of cards', () => {
    render(<App />);
    const cards = screen.getAllByText(/days/i);
    expect(cards).toHaveLength(3);
  });

  test('render a dropdown', () => {
    render(<App />);
    const dropdown = screen.getByText(/spain/i);
    expect(dropdown).toBeInTheDocument();
  });
});

const marketSpain = [
  {
    name: 'Short Trips',
    description: 'home@sliders@shortTrips@description',
    slug: '/ca/short-trips',
    type: 'custom',
    title: 'home@sliders@shortTrips@title',
    icon: 'short-trips',
    background: 'short_trips_bg',
    cards: [
      {
        id: 10422,
        title: 'Ultimate South American Odyssey ',
        destination: 'Brazil, Argentina, Ecuador & Peru',
        images: [
          {
            desktop: 'https://d72z8785jvl84.cloudfront.net/img/p/10422/c253798.jpg',
            tablet: 'https://d72z8785jvl84.cloudfront.net/img/p/10422/c253798.jpg',
            mobile: 'https://d72z8785jvl84.cloudfront.net/img/p/10422/c253798.jpg',
          },
        ],
        days: 29,
        url: '/ca/tours/america/10422-ultimate-south-american-odyssey',
        map: null,
        highlights: null,
        includes: null,
        priceDetail: {
          fromPrice: 5999,
          fromPriceBeautify: '$5,999',
          discountSaved: 5760,
          oldPriceBeautify: '$11,759',
          pricingPercentage: 48,
          pricePerNight: '$214',
        },
        tags: null,
        crafterDetail: null,
        hasPrivateTour: false,
        hasSoloTraveller: true,
        headLine: null,
        tagHeadLine: [],
        isLandOnly: false,
        isValid: true,
        extraNights: 0,
      },
      {
        id: 9706,
        title: 'Bangkok, Angkor Wat & Ha Long Bay',
        destination: 'Thailand, Cambodia & Vietnam',
        images: [
          {
            desktop: 'https://d72z8785jvl84.cloudfront.net/img/p/9706/c261895.jpg',
            tablet: 'https://d72z8785jvl84.cloudfront.net/img/p/9706/c261895.jpg',
            mobile: 'https://d72z8785jvl84.cloudfront.net/img/p/9706/c261895.jpg',
          },
        ],
        days: 19,
        url: '/ca/tours/asia/9706-bangkok-angkor-wat-ha-long-bay',
        map: null,
        highlights: null,
        includes: null,
        priceDetail: {
          fromPrice: 3299,
          fromPriceBeautify: '$3,299',
          discountSaved: 1920,
          oldPriceBeautify: '$5,219',
          pricingPercentage: 36,
          pricePerNight: '$183',
        },
        tags: null,
        crafterDetail: null,
        hasPrivateTour: false,
        hasSoloTraveller: true,
        headLine: null,
        tagHeadLine: [],
        isLandOnly: false,
        isValid: true,
        extraNights: 0,
      },
      {
        id: 6420,
        title: 'Cities & Natural Wonders of South America ',
        destination: 'Chile, Argentina & Brazil',
        images: [
          {
            desktop: 'https://d72z8785jvl84.cloudfront.net/img/p/6420/c245274.jpg',
            tablet: 'https://d72z8785jvl84.cloudfront.net/img/p/6420/c245274.jpg',
            mobile: 'https://d72z8785jvl84.cloudfront.net/img/p/6420/c245274.jpg',
          },
        ],
        days: 18,
        url: '/ca/tours/america/6420-cities-natural-wonders-of-south-america',
        map: null,
        highlights: null,
        includes: null,
        priceDetail: {
          fromPrice: 3999,
          fromPriceBeautify: '$3,999',
          discountSaved: 1880,
          oldPriceBeautify: '$5,879',
          pricingPercentage: 31,
          pricePerNight: '$235',
        },
        tags: null,
        crafterDetail: null,
        hasPrivateTour: false,
        hasSoloTraveller: true,
        headLine: null,
        tagHeadLine: [],
        isLandOnly: false,
        isValid: true,
        extraNights: 5,
      },
    ],
  },
];
