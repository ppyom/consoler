import React from 'react';
import Card from '../Card/Card.tsx';
import { useSearch } from '../../../context/cardContext.tsx';

interface CardListProps {
  className?: string;
  line?: boolean;
}

const CardList: React.FC<CardListProps> = ({
  className = '',
  line = false,
}) => {
  const { results: cards } = useSearch();
  return (
    <div className={`${className}`}>
      {cards.map((consoleItem) => (
        <Card key={`card${consoleItem.id}`} {...consoleItem} line={line} />
      ))}
    </div>
  );
};
export default CardList;
