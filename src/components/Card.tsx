import { NormalLink } from "./NormalLink";

function SocialMedia({ social, children }: { social: string; children?: any }) {
    return (
        <div className="bg-neutl flex flex-col gap-1 items-center rounded-2xl w-full p-1">
            <header className="flex items-center gap-3 mt-1 w-full px-0.5">
                <img className="w-10 rounded-xl border-2 border-white " src={`/social-resize/${social}.png`} alt="" />
                <h1 className="md:text-lg font-semibold uppercase text-white">{social}</h1>
                <div className="w-full bg-white h-1 rounded"></div>
            </header>
            <div className="flex flex-col mt-1 w-full md:gap-2 gap-1">
                {/* LISTA */}
                {children}
            </div>
        </div>
    );
}

export function Card() {
    return (
        <div className="shadow-2xl w-210 md:rounded-xl bg-neutral-900/60 backdrop-blur-2xl md:p-7 p-1">
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
                    {/* GOOGLE MAPS (MOBILE E PC) */}
                    <div className="w-full md:hidden">
                        <NormalLink link="https://maps.app.goo.gl/GKmvCd5iecmK92T7A" text="Visite-nos!" user="Av. Fagundes Filho, 55" />
                    </div>
                    <div className="hidden md:flex flex-col w-full transition-all duration-150 ease-in-out">
                        <GoogleMaps />
                    </div>
                    {/* MINISTÉRIOS E CADA REDE SOCIAL */}
                    <MinisterBySocial />
                </>
            </div>
        </div>
    );
}

function GoogleMaps() {
    return (
        <a href="https://maps.app.goo.gl/GKmvCd5iecmK92T7A">
            <header className="flex items-center rounded-t-xl bg-neutral-900/60 w-full p-0.5">
                <img src="/social-resize/Visite-nos!.png" className="w-12 rounded" alt="" />
                <div className="flex justify-between items-center w-full px-3">
                    <h1 className="font-semibold md:text-lg text-xs text-neutral-100">Venha nos visitar!</h1>
                    <span className="text-xs md:text-sm text-sky-300 ">Av. Fagundes Filho, 55</span>
                </div>
            </header>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.8440752967032!2d-46.640449004384664!3d-23.626691136079625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a51ccf3158f%3A0x15debf270809068d!2sIgreja%20Crist%C3%A3%20da%20Trindade%20-%20ICT!5e0!3m2!1spt-BR!2sbr!4v1746774070475!5m2!1spt-BR!2sbr"
                className="rounded-b-xl w-[100%] h-80"
                loading="lazy"></iframe>
        </a>
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
