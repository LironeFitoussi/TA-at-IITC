import React from 'react'

interface CardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    padding?: 'small' | 'medium' | 'large' 
}

function Card({
    children,
    className = "",
    title,
    padding = "medium"
}: CardProps) {
    const paddingClass = `card-padding-${padding}`

    return (
        <div className={`card ${paddingClass} ${className}`}>
            {title && <h3 className='card-title'>{title}</h3>}
            <div className="card-content">
                {children}
            </div>
        </div>
    )
}

export default Card;