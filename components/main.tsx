type MainProps = {
  className?: string
}

export const Main: React.FC<MainProps> = ({ children, className }) => (
  <main className={className}>
    {children}
  </main>
)

export default Main
