import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="bg-white border-b border-[#D0DFDB] px-6 py-4">
            <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#46CFB1] rounded flex items-center justify-center">
                        <span className="text-white text-sm font-medium">RH</span>
                    </div>
                    <span className="text-[#354B45] font-semibold">RH Romeu</span>
                </Link>

                <div className="flex gap-6">
                    <Link 
                        to="/funcionarios"
                        className={`${
                            location.pathname === '/funcionarios' 
                            ? 'text-[#46CFB1]' 
                            : 'text-[#354B45]'
                        } hover:text-[#46CFB1] transition-colors font-semibold`}
                    >
                        Funcionários
                    </Link>
                    <Link 
                        to="/sobre"
                        className={`${
                            location.pathname === '/sobre' 
                            ? 'text-[#46CFB1]' 
                            : 'text-[#354B45]'
                        } hover:text-[#46CFB1] transition-colors font-semibold`}
                    >
                        Sobre Nós
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;