interface CardProps {
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
}


export default function Card({ logo, name, description, isActive }: CardProps) {
    const reformattedLogo = logo.replace(/^\.\//, "/src/");
    
    return (
        <div className="flex flex-col text-white bg-[hsl(var(--neutral-700))] p-4 rounded-xl">
            <div className="flex gap-4 items-center">
                <img src={reformattedLogo} alt="" />
                <div>
                    <h3>{name}</h3>
                    <p className="text-sm">{description}</p>
                </div>
            </div>
            <div>
                <button>remove</button>
                <button>switch</button>
            </div>
        </div>
    )
}