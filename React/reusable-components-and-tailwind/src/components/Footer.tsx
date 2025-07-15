interface FooterProps {
  text?: string;
}

function Footer({ text = "Built with React and CSS" }: FooterProps) {
  return (
    <footer className="footer">
      <p>{text}</p>
    </footer>
  );
}

export default Footer; 