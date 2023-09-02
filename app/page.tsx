import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black text-white flex justify-center items-center">
      <div className="w-full max-w-[50%] mx-auto flex flex-col gap-5">
        <h1 className="text-5xl">The Best Journal App, period.</h1>

        <p className="text-2xl text-white/60">
          This is the best app for tracking your mood through out your life. All
          you have to do is be honest
        </p>

        <div>
          <Link href="/journal">
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
