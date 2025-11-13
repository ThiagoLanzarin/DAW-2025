import React from 'react';

export function Highlight() {

    const bgImage = '/img/etT14XfDEqhQZdD47ywpyihXPyW.jpg';
    const posterImage = '/img/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg';

    return (
        <section className="relative flex bg-[url('../img/etT14XfDEqhQZdD47ywpyihXPyW.jpg')] bg-left bg-top bg-cover bg-no-repeat">
            <div className="absolute top-0 left-0 w-full h-full z-1 bg-[linear-gradient(to_right,rgba(17,17,17,1)_calc((50vw-70px)-340px),rgba(17,17,17,0.7)_50%,rgba(17,17,17,0.7)_100%)]"></div>
            <div className="max-w-6xl mx-auto flex gap-8 py-8 z-20">
                
                <img 
                    className="rounded-lg" 
                    src={posterImage} 
                    alt="Capa do filme"
                />
                
                <div className="flex flex-col">
                    <h2 className="text-4xl font-normal">Como Treinar o Seu Dragão</h2>  

                    <div className="text-sm my-[0.6rem]">
                        <span className="bg-white/20 px-3 py-1 rounded-full text-xs mr-3">Fantasia</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-xs mr-3">Família</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-xs">Ação & Aventura</span>
                        
                        <span className="pl-4 text-[#ccc]">2h 5min</span>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <h4 className="font-normal pt-12 pb-2">Sinopse:</h4>
                        
                        <p className="text-[#a0a0a0] text-sm">Em um mundo onde dragões e humanos coexistem, um jovem viking chamado Soluço se torna amigo de um dragãoferido chamado Banguela. Juntos, eles desafiam as tradições de suas tribos e descobrem que dragões não são os monstros que todos acreditavam ser.</p>
                    </div>

                    <div className="flex gap-4 my-6">
                        <button className="bg-[#e50914] text-white py-3 px-6 font-bold rounded cursor-pointer transition-colors hover:bg-[#b8070f]">
                            Assistir
                        </button>
                        <button className="bg-white/20 border border-white/30 text-white py-3 px-6 font-bold rounded cursor-pointer transition-colors hover:bg-white/30">
                            Detalhes
                        </button>
                        <button className="bg-white/20 border border-white/30 text-white py-3 px-6 font-bold rounded cursor-pointer transition-colors hover:bg-white/30">
                            + Adicionar à Lista
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}