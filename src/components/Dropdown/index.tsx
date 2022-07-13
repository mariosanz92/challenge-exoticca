import { Dispatch, SetStateAction, useRef, useState } from 'react';
import useOnClickOutside from '../../useOnClickOutside';
import { Container, SelectedItem, Content, Item, Arrow } from './Dropdown.styled';

type DropdownProps = {
  setValue: Dispatch<SetStateAction<{ name: string; value: string }>>;
  value: { name: string; value: string };
  options: { name: string; value: string }[];
};

const Dropdown = ({ setValue, value, options }: DropdownProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  useOnClickOutside(ref, () => setIsDropdownVisible(false));

  const handleClick = (value: { name: string; value: string }): void => {
    setValue(value);
    setIsDropdownVisible(false);
  };

  return (
    <Container>
      <SelectedItem onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
        {value.name}
        <Arrow />
      </SelectedItem>
      <Content ref={ref} isDropdownVisible={isDropdownVisible}>
        {options.map(
          (option) =>
            option.name !== value.name && (
              <Item key={option.name} onClick={() => handleClick(option)}>
                {option.name}
              </Item>
            )
        )}
      </Content>
    </Container>
  );
};

export default Dropdown;
