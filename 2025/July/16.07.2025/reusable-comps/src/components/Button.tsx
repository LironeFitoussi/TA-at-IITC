import React from "react"

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant: "primary" | "secondary" | "outline" | "danger" | "success";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

function Button({
    children,
    onClick,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    className = "",
    style
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`btn btn-${variant} btn-${size} ${className}`}
            style={style}
        >
            {children}
        </button>
    )
}

export default Button