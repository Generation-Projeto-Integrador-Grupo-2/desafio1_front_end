import FuncionarioCard from '../components/funcionarios/FuncionarioCard';
import { funcionarios } from '../data/funcionarios';

const Funcionarios = () => {
    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-[#354B45]">Funcionários</h1>
                    <p className="text-[#98B0A9]">Gerencie todos os funcionários da empresa</p>
                </div>
                <button className="bg-[#46CFB1] text-white px-4 py-2 rounded-lg hover:bg-[#46CFB1]/90 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                    </svg>
                    Novo Funcionário
                </button>
            </div>

            {/* Barra de busca */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Buscar por nome, email ou departamento..."
                    className="w-full p-3 border rounded-lg"
                />
            </div>

            {/* Lista de funcionários */}
            <div className="space-y-4">
                {funcionarios.map((funcionario) => (
                    <FuncionarioCard
                        key={funcionario.id}
                        {...funcionario}
                    />
                ))}
            </div>
        </div>
    );
};

export default Funcionarios;