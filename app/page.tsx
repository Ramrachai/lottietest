"use client"
import LottieScrollAnimation from './LottieOnScroll';


export default function Home() {

  


  return (
    <div className="flex flex-col min-h-screen items-center justify-start bg-zinc-50 font-sans dark:bg-black">
      <div style={{ height: "50vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: 'column', gap: '1rem' }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Scroll Down to See the Animation</h1>
        <p>Animation file size is : <span className='text-2xl text-green-700'>185KB</span></p>
      </div>
      <LottieScrollAnimation />
      <div style={{ height: "50vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h2 style={{ fontSize: "2rem" }}>Keep Scrolling!</h2>
      </div>
    </div>
  );
}
