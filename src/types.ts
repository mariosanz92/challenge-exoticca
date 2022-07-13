export type card = {
  id: number;
  title: string;
  destination: string;
  images: [{ desktop: string; tablet: string; mobile: string }];
  days: number;
  url: string;
  map?: string;
  highlights?: string;
  includes?: string;
  priceDetail: {
    fromPrice: number;
    fromPriceBeautify: string;
    discountSaved: number;
    oldPriceBeautify: string;
    pricingPercentage: number;
    pricePerNight: string;
  };
  tags?: string | null;
  crafterDetail?: string | null;
  hasPrivateTour: boolean;
  hasSoloTraveller: boolean;
  headLine?: string | null;
  tagHeadLine: string[];
  isLandOnly: boolean;
  isValid: boolean;
  extraNights: number;
};

export type slide = {
  background: string;
  cards: card[];
  description: string;
  icon: string;
  name: string;
  slug: string;
  title: string;
  type: string;
};
