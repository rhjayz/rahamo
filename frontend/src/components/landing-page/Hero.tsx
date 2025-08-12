import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero min-h-screen text-white p-10">
      <div className="hero-content flex-col md:flex-row-reverse">
        <img
          src="/assets/landing-page/Herophone.png"
          alt="Phone"
          className="max-w-sm mbg-transparent w-full max-w-md 
                     md:max-w-md lg:max-w-md h-auto drop-shadow-[0_0_20px_rgba(0,255,255,0.8)] 
                     transition-all duration-300 ease-in-out
                     hover:drop-shadow-[0_0_30px_rgba(0,255,255,1)]
                     hover:-translate-y-2"
        />
        <div className="flex-1">
          <h1 className="text-[45px] font-bold font-anta leading-[40px]">
            Trade the Future.
            <br />
            Own the Blockchain.
          </h1>
          <p className="py-6 font-monda leading-[20px]">
            Experience lightning-fast swaps, real-time price charts, and total
            control of your assets
          </p>
          <div className="flex flex-row gap-5">
            <button className="btn btn-soft btn-info button-glow rounded-xl">
              Connect Wallet
            </button>
            <button className="btn btn-soft btn-info button-glow rounded-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
