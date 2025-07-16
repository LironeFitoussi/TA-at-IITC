import Card from "./Card"
import Button from './Button'


function Content () {
    const handleButtonClick = (message: string) => {
        alert(message)
    }
    return (
        <main className="content">
            <section className="section">
                <h2>Button Components</h2>
                <p>Button Variations</p>
                <Card title="Buttons Examples">
                    <div className="button-showcase">
                        <Button
                            variant="primary"
                            onClick={() => handleButtonClick("This is a regular button")}
                        >
                            Primary
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => handleButtonClick("This is a secondary button")}
                        >
                            Secondary
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => handleButtonClick("This is a outline button")}
                        >
                            Outline
                        </Button>
                        <Button
                            variant="danger"
                            onClick={() => handleButtonClick("Broooooooo")}
                        >
                            Don't Click Me
                        </Button>
                        
                    </div>
                </Card>
            </section>
        </main>
    )
}

export default Content