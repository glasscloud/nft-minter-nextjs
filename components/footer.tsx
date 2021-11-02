type FooterProps = {
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ children, className }) => (
  <footer className={className}>
    {children}
  </footer>
)

export default Footer
