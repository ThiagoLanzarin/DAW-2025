const categories = [
    { label: 'Mais Assistidos', link: '/mais-assistidos', active: true },
    { label: 'Mais Votados', link: '/mais-votados', active: false },
    { label: 'Novidades', link: '/novidades', active: false },
    { label: 'Top 10', link: '/top-10', active: false },
    { label: 'Gêneros', link: '/generos', active: false }
]

export function Navbar() {
    return (
        <nav className="flex bg-[#1c1c1c] border-b border-[#333] max-w-6xl mx-auto">
            <ol className="flex gap-8 list-none py-6">
                {categories.map((item) => (
                <li>
                    <a href={item.link} 
                    className={`text-sm ${item.active
                    ? 'text-[#e50914] border-b-2 border-[#e50914] hover:text-[#e50914]' 
                    : 'text-[#ccc] hover:text-white'
                    }`}
                    >
                    {item.label}</a>
                </li>
                ))}
            </ol>
        </nav>
    )
}