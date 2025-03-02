import React from 'react';
import Card from './Card';
import { CardData } from '@/data/cardData';

interface CardGridProps {
  cards: CardData[];
  onCardClick?: (id: number) => void;
}

const CardGrid: React.FC<CardGridProps> = ({ cards, onCardClick }) => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 
      mx-2 sm:mx-6 md:mx-12 lg:mx-20 xl:mx-32 2xl:mx-48 3xl:mx-64 4xl:mx-80 
      px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
    >
      {cards.map((card) => (
        <Card key={card.id} data={card} onClick={onCardClick} />
      ))}
    </div>
  );
};

export default CardGrid;
