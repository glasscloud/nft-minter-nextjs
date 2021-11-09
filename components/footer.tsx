type FooterProps = {
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ children, className }) => (
  <footer className={"flex flex-wrap bg-transparent p-6 text-center"}>
    <p className={"block mx-auto mt-4 lg:inline-block lg:mt-0 text-white"}>DΞGΞNM4DΞ</p>
  </footer>
)

export default Footer
