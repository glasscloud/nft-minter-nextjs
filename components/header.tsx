import Link from 'next/link'

type HeaderProps = {
  className?: string
}

export const Header: React.FC<HeaderProps> = ({ children, className }) => (
  <header className={className}>
    <nav className={"flex items-center justify-between flex-wrap bg-transparent p-6"}>
      <div className={"w-full block flex-grow lg:flex lg:items-center lg:w-auto"}>
        <div className={"text-sm lg:flex-grow"}>
          <Link href="/">
            <a className={"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-black hover:underline mr-4"}>Home</a>
          </Link>
          <Link href="/mint">
            <a href="#" className={"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-black hover:underline mr-4"}>
              Mint
            </a>
          </Link>
        </div>
        <div>
          <a href="#" className={"inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0"}>CONNECT WALLET</a>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
