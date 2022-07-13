import CardList from './components/CardList';
import Dropdown from './components/Dropdown';
import { useState } from 'react';
import useMarkets from './useMarkets';
import { Container } from './App.styled';

const App = () => {
  const [option, setOption] = useState<{ name: string; value: string }>({ name: 'Spain', value: 'es' });
  const { market } = useMarkets(option.value);
  return (
    <Container>
      <Dropdown
        setValue={setOption}
        value={option}
        options={[
          { name: 'Spain', value: 'es' },
          { name: 'England', value: 'uk' },
          { name: 'USA', value: 'us' },
        ]}
      />
      {market.map(({ cards, title, slug, description }) => (
        <CardList cards={cards} key={slug} title={title} description={description} />
      ))}
    </Container>
  );
};

export default App;
