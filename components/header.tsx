type HeaderProps = {
  className?: string
}

export const Header: React.FC<HeaderProps> = ({ children, className }) => (
  <header className={className}>
    {children}
  </header>
)

export default Header
