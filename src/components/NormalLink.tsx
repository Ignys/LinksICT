export function LinkStructure({ children, link }: { children: any; link: string }) {
    return (
        <a href={link} className="w-full">
            <div className="shadow-2xl rounded-xl bg-neutral-800/40 backdrop-blur-3xl p-0.5 flex hover:scale-105 transition-all duration-150 ease-in-out items-center">{children}</div>
        </a>
    );
}

export function NormalLink({ link, text, user }: { link: string; text?: string; user?: string }) {
    return (
        <LinkStructure link={link}>
            <img className="md:w-12 md:h-12 w-10 h-10 md:p-1 p-0.5 md:rounded-2xl rounded-xl" src={`/social-resize/${text}.png`} alt="" />
            <div className="flex items-center justify-between w-full px-3">
                <span className="font-semibold md:text-lg text-xs text-neutral-100">{text}</span>
                <span className="text-xs md:text-sm text-sky-300">{user}</span>
            </div>
        </LinkStructure>
    );
}
