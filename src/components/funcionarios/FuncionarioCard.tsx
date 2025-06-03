import { departmentColors, statusColors } from '../../utils/departmentColors';

interface FuncionarioProps {
    nome: string;
    email: string;
    cargo: string;
    departamento: string;
    dataAdmissao: string;
    status: string;
    iniciais: string;
}

const FuncionarioCard = ({ nome, email, cargo, departamento, dataAdmissao, status, iniciais }: FuncionarioProps) => {
    const deptColors = departmentColors[departamento] || { bg: "bg-[#EBFDF8]", text: "text-[#354B45]" };
    const statusColor = statusColors[status];

    return (
        <div className="p-4 border border-[#D0DFDB] rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
            <div className="flex items-center gap-4">
                {/* Avatar com iniciais */}
                <div className="w-12 h-12 rounded-full bg-[#46CFB1] flex items-center justify-center">
                    <span className="text-white text-lg font-medium">{iniciais}</span>
                </div>

                {/* Informações principais */}
                <div className="flex-1">
                    <h3 className="text-[#354B45] text-lg font-semibold">{nome}</h3>
                    <p className="text-[#98B0A9] text-sm">{email}</p>
                    <p className="text-[#98B0A9] text-sm">{cargo}</p>
                </div>

                {/* Departamento */}
                <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${deptColors.bg} ${deptColors.text}`}>
                        {departamento}
                    </span>

                    {/* Data de Admissão */}
                    <div className="text-right">
                        <p className="text-[#98B0A9] text-sm">Admitido em</p>
                        <p className="text-[#354B45] text-sm font-medium">{dataAdmissao}</p>
                    </div>

                    {/* Status */}
                    <span className={`px-3 py-1 rounded-full text-sm ${statusColor.bg} ${statusColor.text}`}>
                        {status}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FuncionarioCard;