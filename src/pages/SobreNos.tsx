import CardInfo from '@/components/CardInfo';
import React from 'react';

import { FaCheckCircle, FaHandsHelping, FaLock } from 'react-icons/fa';

const SobreNos = () => {
  return (
    <div className="bg-blue-50 py-10 px-6 md:px-20 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Sobre Nós</h1>
      <p className="text-gray-700 mb-8 max-w-3xl">
        O RH Romeu é uma solução completa para gestão de recursos humanos, desenvolvida para simplificar e otimizar os processos de RH da sua empresa.
      </p>

      <div className="space-y-6 mb-10">
        <div>
          <h2 className="text-xl font-semibold">Nossa Missão</h2>
          <p>
            Facilitar a gestão de pessoas através de tecnologia intuitiva e eficiente, permitindo que as empresas foquem no que realmente importa: suas equipes.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Nossa Visão</h2>
          <p>
            Ser a plataforma de RH mais confiável e inovadora do mercado, transformando a forma como as empresas gerenciam seus talentos.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Nossos Valores</h2>
          <ul className="list-disc list-inside pl-2">
            <li>Transparência em todas as relações</li>
            <li>Inovação constante</li>
            <li>Foco no cliente</li>
            <li>Simplicidade e usabilidade</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Nossa Equipe</h2>
          <p>
            Composta por especialistas em RH e tecnologia, nossa equipe trabalha incansavelmente para oferecer a melhor experiência possível.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Por que escolher o RH Romeu?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CardInfo icon={<FaCheckCircle />} title="Facilidade de Uso">
          Interface intuitiva e amigável
        </CardInfo>
        <CardInfo icon={<FaHandsHelping />} title="Suporte Completo">
          Assistência técnica especializada
        </CardInfo>
        <CardInfo icon={<FaLock />} title="Segurança">
          Proteção total dos dados
        </CardInfo>
      </div>
    </div>
  );
};

export default SobreNos;
