import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CardData } from '@/data/cardData';
import { InteractiveHoverButton } from '../magicui/interactive-hover-button';
import Image from 'next/image';

interface CardProps {
  data: CardData;
  onClick?: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ data, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(data.id);
    }
  };

  return (
    <div className="bg-stone-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={`${data.image}`} // Assuming images are in `public/images/`
          alt={data.title} 
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-stone-100 mb-2">{data.title}</h3>
        <p className="text-stone-300 text-sm mb-4">{data.description}</p>
        
        <div className="flex justify-end mt-4">
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            <InteractiveHoverButton onClick={handleClick}>
              {data.buttonText}
            </InteractiveHoverButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
