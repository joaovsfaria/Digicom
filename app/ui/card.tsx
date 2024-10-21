import React from 'react';
import Button from '@/app/ui/button';

interface CardProps {
  title: string;
  description: string;
  price: string;
  decimals: string;
  main: boolean;
}

const Card: React.FC<CardProps> = ({ title, description, price, decimals, main}) => {
  return (

    <div className={`justify-center gap-[25px] flex flex-col ${main ? 'bg-[#f26409] text-white'  : 'bg-white text-[#2A4E6E]'} shadow-md rounded-lg p-8 text-center max-w-xs mx-auto border border-gray-200 w-[337px] h-[486px]`}>
      <h2 className={`text-5xl mb-4 `}>{title}</h2>
      <p className={`h-[70px] ${main ? 'text-white'  : 'text-[#6A6D71]'}`}>
        {description}
      </p>
      <div className={`flex items-center justify-center ${main ? 'text-white'  : 'text-[#6A6D71]'}`}>
        <div className="text-2xl">
          R$
        </div>
        <div className={`text-5xl font-bold mb-1 ${main ? 'text-white'  : 'text-[#2A4E6E]'}`}>
          {price}
        </div>
        <div className='flex flex-col'>
          <span className={`text-2xl font-bold ${main ? 'text-white'  : 'text-[#2A4E6E]'}`}>,{decimals}</span>
          <div className="">/mês</div>
        </div>
      </div>
      <Button filled={false}/>
    </div>
  );
};
export default Card;
