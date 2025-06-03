import React from 'react';

interface CardInfoProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const CardInfo: React.FC<CardInfoProps> = ({ icon, title, children }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 flex flex-col items-start">
      <div className="text-2xl text-blue-600 mb-2">{icon}</div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-700 text-sm">{children}</p>
    </div>
  );
};

export default CardInfo;


