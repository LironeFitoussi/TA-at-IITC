import Header from './Header'
import Footer from './Footer'
import Content from './Content'
function LandingPage () {
    return (
        <div className="landing-page">
            <div className="container">
                <Header title='My App' subtitle='Welocome to our site'/>
                <Content />
                <Footer text='האתר המגניב של לירון והשניצלים המעופפים'/>
            </div>
        </div>
    )
}

export default LandingPage