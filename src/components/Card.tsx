import { NormalLink } from "./NormalLink";

function SocialMedia({ social, children }: { social: string; children?: any }) {
    return (
        <div className="bg-neutl flex flex-col gap-1 items-center rounded-2xl w-full p-1">
            <header className="flex items-center gap-3 mt-1 w-full px-0.5">
                <img className="w-10 rounded-xl border-2 border-white " src={`/social-resize/${social}.png`} alt="" />
                <h1 className="md:text-lg font-semibold uppercase text-white">{social}</h1>
                <div className="w-full bg-white h-1 rounded"></div>
            </header>
            <div className="flex flex-col mt-1 w-full md:gap-2 gap-1 transition-all duration-100 ease-in-out">
                {/* LISTA */}
                {children}
            </div>
        </div>
    );
}

export function Card() {
    return (
        <div className="shadow-2xl w-210 md:rounded-xl bg-neutral-950/60 backdrop-blur-2xl md:p-7 p-1">
            <header className="flex flex-col items-center p-5 gap-5">
                <img className="w-20 h-20 bg-white rounded-full p-1" src="/logo-ict.png" alt="Logo" />
                <div className="md:px-20 text-center flex flex-col gap-2">
                    <h1 className="font-cal text-2xl text-white">Igreja Cristã da Trindade</h1>
                    <h2 className="text-white text-sm font-normal">
                        Conheça todos os nossos ministérios que estão <span className="font-semibold">anunciando o amor de Jesus Cristo 🩵✝️</span>
                    </h2>
                </div>
            </header>
            <div className="flex flex-col items-center gap-1 md:gap-2 h1:text-xl h1:text-white">
                <>
                    {/* SITE OFICIAL */}
                    <NormalLink link="https://www.ictrindade.com.br" text="Nosso site oficial!" user="ictrindade.com.br" />
                    {/* GOOGLE MAPS */}
                    <NormalLink link="" text="Visite-nos!" user="Av. Fagundes Filho, 55" />
                    {/* MINISTÉRIOS E CADA REDE SOCIAL */}
                    <MinisterBySocial />
                </>
            </div>
        </div>
    );
}

function MinisterBySocial() {
    return (
        <>
            <SocialMedia social="Instagram">
                <NormalLink link="https://www.instagram.com/ictrindadesp" text="Igreja Cristã da Trindade" user="@ictrindadesp" />
                <NormalLink link="https://www.instagram.com/jovensict" text="Jovens ICT" user="@jovensict" />
                <NormalLink link="https://www.instagram.com/teensict" text="Teens ICT" user="@teensict" />
                <NormalLink link="https://www.instagram.com/podcastaprendendocomelas" text="Aprendendo com Elas" user="@podcastaprendendocomelas" />
                <NormalLink link="https://www.instagram.com/mulheres.ict" text="Mulheres ICT" user="@mulheres.ict" />
            </SocialMedia>

            <SocialMedia social="Facebook">
                <NormalLink link="https://www.facebook.com/ictrindadeSP" text="Igreja Cristã da Trindade" user="@ictrindadeSP" />
                <NormalLink link="https://www.facebook.com/jovensict/" text="Jovens ICT" user="@jovensict" />
                <NormalLink link="https://www.facebook.com/icteenssp/" text="Teens ICT" user="@icteenssp" />
                <NormalLink link="https://www.facebook.com/mulheres.ict/" text="Mulheres ICT" user="@mulheres.ict" />
            </SocialMedia>

            <SocialMedia social="Youtube">
                <NormalLink link="https://www.youtube.com/ictrindadesp" text="Igreja Cristã da Trindade" user="@ictrindadesp" />
                <NormalLink link="https://www.youtube.com/@podcastaprendendocomelas" text="Aprendendo com Elas" user="@podcastaprendendocomelas" />
            </SocialMedia>

            <SocialMedia social="Tiktok">
                <NormalLink link="https://www.tiktok.com/@ictrindade" text="Igreja Cristã da Trindade" user="@ictrindade" />
                <NormalLink link="https://www.tiktok.com/@podcastaprendendocomelas" text="Aprendendo com Elas" user="@podcastaprendendocomelas" />
            </SocialMedia>
        </>
    );
}
