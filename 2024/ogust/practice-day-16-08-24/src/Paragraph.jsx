import Image from './Image';

export default function Paragraph({ title, body, image }) {
    console.log(image);
    
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <Image src={image} />
        </div>
    )
};