import Button from "./Button";

interface CardProps {
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
}


export default function Card({ logo, name, description, isActive }: CardProps) {
    const reformattedLogo = logo.replace(/^\.\//, "/src/");
    
    return (
        <div className="flex flex-col text-white bg-[hsl(var(--neutral-700))] p-4 rounded-xl justify-between h-[20vh]">
            <div className="flex gap-4 items-center">
                <img src={reformattedLogo} alt="" />
                <div>
                    <h3>{name}</h3>
                    <p className="text-sm">{description}</p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <Button 
                    variant="outline"
                    onClick={() => alert('CardButton')}
                    size="s"
                    title="Remove"
                />
                <button>switch</button>
            </div>
        </div>
    )
}