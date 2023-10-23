import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Labs - PyBash</title>
        <meta
          name="description"
          content="Experiments and failed projects from PyBash with ❤️"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-satoshi flex min-h-screen flex-col gap-10 bg-[url('/bg.jpg')] py-8 text-white">
        <div className="font-chalkduster mx-36 w-fit border border-white px-4 py-2 text-3xl">
          Labs{" "}
          <span className="font-bradley text-sm">
            <a href="https://pybash.xyz">by PyBash</a>
          </span>
        </div>
        <div className="grid grid-cols-6">
          <div className="sketch-bg flex items-center justify-center border border-white py-8"></div>
          <div className="sketch-bg-2 col-span-4 flex flex-col gap-6 border-y border-white px-6 py-8">
            <div className="bg- white flex items-center justify-center py-24 text-black">
              {/* Come here */}
            </div>
            <div>
              <div className="text-4xl font-bold">Latest Lab</div>
              <div className="text-xl font-medium">
                Custom trailer for my portfolio.
              </div>
            </div>
          </div>
          <div className="sketch-bg flex items-center justify-center border border-white py-8"></div>
        </div>
        <div className="px-36">
          <div className="text-4xl font-bold">Other Labs</div>
        </div>
      </main>
    </>
  );
}
