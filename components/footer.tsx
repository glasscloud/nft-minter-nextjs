type FooterProps = {
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ children, className }) => (
  <footer className={"flex align-items-center justify-items-center flex-wrap bg-transparent p-6"}>
    <p className={"block mt-4 lg:inline-block lg:mt-0 text-white"}>Made by some 🐹</p>
  </footer>
)

export default Footer
