import React from 'react';
import Card from '../Card/Card.tsx';
import { useSearch } from '../../../context/cardContext.tsx';

interface CardListProps {
  className?: string;
}

const CardList: React.FC<CardListProps> = ({ className = '' }) => {
  const { results: cards } = useSearch();
  return (
    <div className={`${className}`}>
      {cards.map((consoleItem) => (
        <Card key={`card${consoleItem.id}`} {...consoleItem} />
      ))}
    </div>
  );
};
export default CardList;
