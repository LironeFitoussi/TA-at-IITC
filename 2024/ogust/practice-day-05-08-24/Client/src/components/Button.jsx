import "./Button.css"

export default function Button ({ text }) {
    return (
        <button className="myButton">
            {text}
        </button>
    )
}