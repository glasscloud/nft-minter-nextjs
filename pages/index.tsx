import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <div className={"container mx-auto px-6 py-20"}>
        <div className={"hero-container text-center align-items-center justify-center"}>
          <h1 className={"justify-center"} data-text={"♔"}>
            {'♔'}
          </h1>
          <button className={"mx-auto text-2xl main__button text-center border-solid border border-white"}>
            MINT
          </button>
        </div>
      </div>
      <div className={"container py-20 align-items-center"}>
        <h2 className={"text-white text-2xl"}>
          Section Heading
        </h2>
        <div className={"h-48"}>

        </div>
      </div>
      <div className={"container py-20 align-items-center"}>
      <h2 className={"text-white text-2xl"}>
          Another Section Heading
        </h2>
        <div className={"h-48"}>

        </div>
      </div>
    </div>
  )
}

export default Home
