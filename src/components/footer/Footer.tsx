import { GithubLogoIcon } from '@phosphor-icons/react'

function Footer() {
    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-[#46CFB1] text-white rounded-t-2xl">
                <div className="container flex flex-col items-start py-4 px-4">
                    <div className="flex gap-4 items-start flex-wrap">
                        {/*Logo RH Romeu */}
                        <img
                            src="https://ik.imagekit.io/6tjnbersb/romeulogobranco.png?updatedAt=1748971917039"
                            alt="Logo RH Romeu"
                            className="h-24 w-auto object-contain"
                        />

                        {/*Texto e ícone empilhados*/}
                        <div className="flex flex-col mt-4">
                            <p className='text-lg mb-1'>Conheça nossas redes sociais</p>
                            <a 
                                href="https://github.com/Generation-Projeto-Integrador-Grupo-2/desafio1_front_end" 
                                target="_blank" 
                                rel="noreferrer"
                                className="w-fit"
                            >
                                <GithubLogoIcon size={40} weight='bold' />
                            </a>
                        </div>
                    </div>

                    {/* Linha branca horizontal */}
                    <div className="w-full h-0.5 bg-white mt-4 rounded-full" />

                    {/* Copyright centralizado abaixo da linha */}
                    <div className="w-full flex justify-center mt-4 text-white">
                        <p className='text-center text-sm font-normal'>
                            RH Romeu {data}. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
