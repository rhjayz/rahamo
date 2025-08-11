import LightRays from "../LightRays/LightRays";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      <div className="navbar bg-transparent backdrop-blur-md bg-opacity-10 shadow-sm text-white">
        <div className="navbar-start">
          <Link
            href="/"
            className="btn btn-soft bg-transparent border-transparent text-xl font-anta  flex flex-row items-center gap-1 cursor-pointer rounded transition-transform transition-colors duration-200 ease-out
                        hover:scale-105 hover:brightness-125 hover:drop-shadow-lg"
          >
            <Image
              src="/assets/logo/Rahamo-gradasi.png"
              alt="Logo"
              width={30}
              height={30}
            />
            RahaMO.
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-monda">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/home">Community</Link>
            </li>
            <li>
              <Link href="/home">Learn</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-soft btn-info rounded-xl font-monda">
            Connect Wallet
          </a>
        </div>
      </div>
    </>
  );
}
