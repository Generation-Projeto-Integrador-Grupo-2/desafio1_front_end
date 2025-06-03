import { FaBullseye, FaEye, FaHeart, FaUsers } from 'react-icons/fa';

const SobreNos = () => {
  return (
    <div className="p-8 bg-[#EBFDF8]">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold mb-2 text-[#354B45]">Sobre Nós</h1>
        <p className="text-[#98B0A9] max-w-2xl mx-auto">
          O RH Romeu é uma solução completa para gestão de recursos humanos, desenvolvida para
          simplificar e otimizar os processos de RH da sua empresa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="border border-[#D0DFDB] rounded-lg p-6 bg-white shadow">
          <div className="flex items-center mb-2 text-lg font-semibold text-[#354B45]">
            <FaBullseye className="text-[#46CFB1] mr-2" />
            Nossa Missão
          </div>
          <p className="text-[#98B0A9]">
            Facilitar a gestão de pessoas através de tecnologia intuitiva e eficiente, permitindo que
            as empresas foquem no que realmente importa: suas equipes.
          </p>
        </div>

        <div className="border border-[#D0DFDB] rounded-lg p-6 bg-white shadow">
          <div className="flex items-center mb-2 text-lg font-semibold text-[#354B45]">
            <FaEye className="text-[#46CFB1] mr-2" />
            Nossa Visão
          </div>
          <p className="text-[#98B0A9]">
            Ser a plataforma de RH mais confiável e inovadora do mercado, transformando a forma como
            as empresas gerenciam seus talentos.
          </p>
        </div>

        <div className="border border-[#D0DFDB] rounded-lg p-6 bg-white shadow">
          <div className="flex items-center mb-2 text-lg font-semibold text-[#354B45]">
            <FaHeart className="text-[#46CFB1] mr-2" />
            Nossos Valores
          </div>
          <ul className="text-[#98B0A9] list-disc ml-5 space-y-1">
            <li>Transparência em todas as relações</li>
            <li>Inovação constante</li>
            <li>Foco no cliente</li>
            <li>Simplicidade e usabilidade</li>
          </ul>
        </div>

        <div className="border border-[#D0DFDB] rounded-lg p-6 bg-white shadow">
          <div className="flex items-center mb-2 text-lg font-semibold text-[#354B45]">
            <FaUsers className="text-[#46CFB1] mr-2" />
            Nossa Equipe
          </div>
          <p className="text-[#98B0A9]">
            Composta por especialistas em RH e tecnologia, nossa equipe trabalha incansavelmente para
            oferecer a melhor experiência possível.
          </p>
        </div>
      </div>

      <div className="text-center mb-4 font-semibold text-lg text-[#354B45]">
        Por que escolher o RH Romeu?
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="border border-[#D0DFDB] rounded-lg p-4 bg-white shadow">
          <div className="font-medium text-[#354B45]">Facilidade de Uso</div>
          <p className="text-[#98B0A9]">Interface intuitiva e amigável</p>
        </div>

        <div className="border border-[#D0DFDB] rounded-lg p-4 bg-white shadow">
          <div className="font-medium text-[#354B45]">Suporte Completo</div>
          <p className="text-[#98B0A9]">Assistência técnica especializada</p>
        </div>

        <div className="border border-[#D0DFDB] rounded-lg p-4 bg-white shadow">
          <div className="font-medium text-[#354B45]">Segurança</div>
          <p className="text-[#98B0A9]">Proteção total dos dados</p>
        </div>
      </div>
    </div>
  );
};

export default SobreNos;