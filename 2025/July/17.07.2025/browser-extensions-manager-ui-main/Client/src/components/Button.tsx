interface ButtonProps {
    variant?: string;
    onClick: () => void;
    size: 's' | 'm' | 'l'
    title: string
}

const ButtonStyle = {
    'primary': ''
}


export default function Button ({ variant = 'primary', onClick, size, title}: ButtonProps) {
    
    
    return (
        <button className="rounded-4xl bg-[hsl(var(--neutral-600))] p-2">
            {title}
        </button>
    )
}