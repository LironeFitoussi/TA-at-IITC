import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import Button from './Button';
import InputGroup from './InputGroup';

interface LandingPageProps {
  onButtonClick: (message: string) => void;
}

function LandingPage({ onButtonClick }: LandingPageProps) {
  return (
    <div className="landing-page">
      <div className="container">
        <Header 
          title="Reusable Components" 
          subtitle="Simple Button, Input, and Card examples" 
        />

        <main className="content">
          {/* Button Examples */}
          <section className="section">
            <h2>Button Component</h2>
            <p>Different button styles and sizes</p>
            
            <Card title="Button Variants">
              <div className="button-showcase">
                <Button 
                  variant="primary" 
                  onClick={() => onButtonClick('Primary clicked!')}
                >
                  Primary
                </Button>
                <Button 
                  variant="secondary" 
                  onClick={() => onButtonClick('Secondary clicked!')}
                >
                  Secondary
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => onButtonClick('Outline clicked!')}
                >
                  Outline
                </Button>
                <Button 
                  variant="danger" 
                  onClick={() => onButtonClick('Danger clicked!')}
                >
                  Danger
                </Button>
              </div>
            </Card>

            <Card title="Button Sizes">
              <div className="button-showcase">
                <Button 
                  variant="primary" 
                  size="small"
                  onClick={() => onButtonClick('Small clicked!')}
                >
                  Small
                </Button>
                <Button 
                  variant="primary" 
                  onClick={() => onButtonClick('Medium clicked!')}
                >
                  Medium
                </Button>
                <Button 
                  variant="primary" 
                  size="large"
                  onClick={() => onButtonClick('Large clicked!')}
                >
                  Large
                </Button>
              </div>
            </Card>
          </section>

          {/* Input Examples */}
          <section className="section">
            <h2>InputGroup Component</h2>
            <p>Form inputs with validation</p>
            
            <Card title="Input Examples">
              <div className="demo-grid">
                <Card title="Normal Input" padding="small">
                  <InputGroup
                    label="Name"
                    placeholder="Enter your name"
                  />
                </Card>

                <Card title="Required Input" padding="small">
                  <InputGroup
                    label="Email"
                    placeholder="Enter your email"
                    required
                  />
                </Card>

                <Card title="Input with Error" padding="small">
                  <InputGroup
                    label="Username"
                    placeholder="Enter username"
                    error="Username is required"
                  />
                </Card>

                <Card title="Input with Helper" padding="small">
                  <InputGroup
                    label="Password"
                    type="password"
                    placeholder="Enter password"
                    helperText="Must be at least 8 characters"
                  />
                </Card>
              </div>
            </Card>
          </section>

          {/* Simple Form */}
          <section className="section">
            <h2>Simple Form</h2>
            <p>Combining components together</p>
            
            <Card title="Contact Form">
              <div className="form-demo">
                <InputGroup
                  label="Name"
                  placeholder="Enter your name"
                />
                <InputGroup
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                />
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <Button 
                    variant="primary" 
                    onClick={() => onButtonClick('Form submitted!')}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Card>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default LandingPage; 