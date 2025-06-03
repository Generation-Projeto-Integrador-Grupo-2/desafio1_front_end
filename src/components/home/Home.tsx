import React from 'react'

function Home() {
return (
<section
    id="home"
    className="h-screen bg-gradient-to-r  to-[#EBFDF8] bg-[#98B0A9] text-black flex items-center justify-center"
    >
    <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold ">
            Bem-vindo ao Sistema RhRomeu
            </h1>
            <p className="mt-4 text-lg">
            Gerencie seus colaboradores e departamentos de forma eficiente.
            </p>
        </div>

        <div className="w-32 h-50  flex flex-1/3">
            <img
            src="https://i.postimg.cc/D0TFMy4T/logorhromeu.png" 
            alt="Logo RhRomeu"
            className="w-full h-full object-contain"
            />
        </div>
        </div>
    </div>
    </section>

)
}

export default Home