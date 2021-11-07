import Link from 'next/link'
import ConnectButton from './connectButton'

type HeaderProps = {
  className?: string
}

export const Header: React.FC<HeaderProps> = ({ children, className }) => (
  <header className={className}>
    <nav className={"flex items-center justify-between flex-wrap bg-transparent p-6"}>
      <div className={"w-full block flex-grow lg:flex lg:items-center lg:w-auto"}>
        <div className={"text-sm lg:flex-grow"}>
          <Link href="/">
            <a className={"block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white hover:underline mr-4"}>Home</a>
          </Link>
          <Link href="/mint">
            <a href="#" className={"block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white hover:underline mr-4"}>
              Mint
            </a>
          </Link>
        </div>
        <div>
          <ConnectButton/>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
