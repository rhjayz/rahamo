export default function Glow() {
  return (
    <>
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#00f0ff] rounded-full blur-[220px] opacity-40 mix-blend-screen"></div>

      <div className="absolute top-[40%] left-1/3 w-[700px] h-[700px] bg-[#ff00ff] rounded-full blur-[300px] opacity-25 mix-blend-screen"></div>

      <div className="absolute top-[25%] left-[8%] w-[200px] h-[200px] bg-[#00f0ff] rounded-full blur-[100px] opacity-30 mix-blend-screen"></div>

      <div className="absolute top-[50%] left-[72%] w-[250px] h-[250px] bg-[#a100ff] rounded-full blur-[120px] opacity-25 mix-blend-screen"></div>

      <div className="absolute top-[-50px] left-[25%] w-[350px] h-[150px] bg-gradient-radial from-[#00f0ff] to-transparent rounded-full blur-[120px] opacity-20 mix-blend-screen"></div>

      <div className="absolute bottom-[-200px] right-[25%] w-[550px] h-[550px] bg-[#ff00c8] rounded-full blur-[200px] opacity-35 mix-blend-screen"></div>
    </>
  );
}
