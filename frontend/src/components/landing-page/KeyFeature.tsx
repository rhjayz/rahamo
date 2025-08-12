"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function KeyFeature() {
  const data = [
    {
      id: 1,
      name: "Security & Transparency",
      icon: "",
      desc: " Audited, open-source smart contracts to protect your assets",
    },
    {
      id: 2,
      name: "Decentralized Trading",
      icon: "",
      desc: "On-chain trades without third-party reliance.",
    },
    {
      id: 3,
      name: "Real-Time Data",
      icon: "",
      desc: "Live prices and transaction stats",
    },
    {
      id: 4,
      name: "Easy to Use",
      icon: "",
      desc: "Simple, beginner-friendly interface.",
    },
  ];
  return (
    <>
      <div className="keyfeature ">
        <h2 className="text-white font-anta text-3xl text-center mb-15">
          Key Features of Our Blockchain Technology
        </h2>
        <div className="flex flex-row items-center justify-center font-monda text-white gap-20">
          <DotLottieReact
            src="/assets/animation/blockchaincurrency.lottie"
            loop
            autoplay
            className="w-85 h-85"
          />
          <div className="flex flex-col gap-3 text-justify ">
            {data.map((item, i) => (
              <div key={i} className="w-82 ">
                <p className="font-bold text-xl">{item.name}</p>
                <span className="text-sm">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
