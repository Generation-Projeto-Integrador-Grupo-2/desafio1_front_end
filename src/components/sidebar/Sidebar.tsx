import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="h-screen w-64 bg-surface-white border-r border-surface-medium">
            {/* Logo/Header */}
            <div className="p-4 border-b border-surface-medium">
                <Link
                    to="/"
                    className="group relative flex items-center gap-2 p-2 rounded-lg overflow-hidden"
                >
                    {/* Background animation */}
                    <div className="absolute inset-0 w-full h-full bg-[#354B45] transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                        <span className="absolute inset-0 flex items-center justify-center text-white">
                            Ir para Home
                        </span>
                    </div>

                    {/* Content */}
                    <div className="relative flex items-center gap-2 group-hover:opacity-0 transition-opacity duration-300">
                        <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                            <span className="text-surface-white text-sm font-medium">RH</span>
                        </div>
                        <div>
                            <h1 className="font-semibold text-lg text-text">RH Romeu</h1>
                            <p className="text-sm text-surface-dark">Sistema de Gestão</p>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Menu Principal */}
            <div className="p-4">
                <p className="text-sm text-surface-dark mb-4">Menu Principal</p>
                <nav className="space-y-2">
                    <Link
                        to="/"
                        className={`group relative flex items-center gap-2 p-2 rounded-lg overflow-hidden ${location.pathname === '/' ? 'bg-[#46CFB1]/10 text-[#46CFB1]' : 'text-text'
                            }`}
                    >
                        <div className="absolute inset-0 w-full h-full bg-[#46CFB1]/10 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
                        <div className="relative flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                            </svg>
                            Dashboard
                        </div>
                    </Link>
                    <Link
                        to="/funcionarios"
                        className={`group relative flex items-center gap-2 p-2 rounded-lg overflow-hidden ${location.pathname === '/funcionarios' ? 'bg-[#46CFB1]/10 text-[#46CFB1]' : 'text-text'
                            }`}
                    >
                        <div className="absolute inset-0 w-full h-full bg-[#46CFB1]/10 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
                        <div className="relative flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                            Funcionários
                        </div>
                    </Link>
                    <Link
                        to="/cadastrar"
                        className={`group relative flex items-center gap-2 p-2 rounded-lg overflow-hidden ${location.pathname === '/cadastrar' ? 'bg-[#46CFB1]/10 text-[#46CFB1]' : 'text-text'
                            }`}
                    >
                        <div className="absolute inset-0 w-full h-full bg-[#46CFB1]/10 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
                        <div className="relative flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                            </svg>
                            Cadastrar Funcionário
                        </div>
                    </Link>
                    <Link
                        to="/relatorios"
                        className={`group relative flex items-center gap-2 p-2 rounded-lg overflow-hidden ${location.pathname === '/relatorios' ? 'bg-[#46CFB1]/10 text-[#46CFB1]' : 'text-text'
                            }`}
                    >
                        <div className="absolute inset-0 w-full h-full bg-[#46CFB1]/10 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
                        <div className="relative flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
                            </svg>
                            Relatórios
                        </div>
                    </Link>
                    <Link
                        to="/configuracoes"
                        className={`group relative flex items-center gap-2 p-2 rounded-lg overflow-hidden ${location.pathname === '/configuracoes' ? 'bg-[#46CFB1]/10 text-[#46CFB1]' : 'text-text'
                            }`}
                    >
                        <div className="absolute inset-0 w-full h-full bg-[#46CFB1]/10 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
                        <div className="relative flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                            Configurações
                        </div>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;