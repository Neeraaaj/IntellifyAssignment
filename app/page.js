import Image from 'next/image'
import Link from 'next/link';

export default function Home() {

  const handleVideo = () => {
    document.addEventListener("DOMContentLoaded", function () {
      var video = document.getElementById("myVideo");
      video.play();
   });
  }

  const handleSignUp = () => {
  }
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row font-Abril">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5 bg-[#9FC5B9] p-12 rounded-lg shadow-lg">
          <div className="max-w-xl mb-6 ">
            <h2 className="font-Abril text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6 font-Abril-Fatface">
              Learn Anything, Anywhere And Grow
              <span className="inline-block text-white ">Your Skills</span>
            </h2>
            <p className="text-white-700 text-base md:text-lg font-bold">Increase your knowledge, obtain facts, and sharpen your abilities. Pick your study materials, and we will make it easy for you to learn them.</p>
            <p className='mt-10 text-2xl font-bold'>Get Our App at.</p>
          </div>
          <div className="flex items-center space-x-3">
            <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
              <img src="https://kitwind.io/assets/kometa/app-store.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
            </a>
            <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
              <img src="https://kitwind.io/assets/kometa/google-play.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
            </a>
          </div>
          <div className='flex flex-col justify-center m-10'>
            <button className='p-2 bg-[#58CC04] rounded-lg font-bold shadow-lg'>Get Started</button>
            <Link href="/Signup">
              <button className='p-2 bg-white text-black font-bold rounded-lg mt-2 shadow-lg'>I ALREADY HAVE AN ACCOUNT</button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-1/2 rounded-lg" id='right'>
           <video loop autoPlay muted id='myVideo'>
              <source src='https://cdn.dribbble.com/userupload/2915580/file/original-0adbbd40fc616efa2c7d956feff99853.mp4' type='video/mp4'></source>
           </video>
        </div>
      </div>
      <a
        href="/"
        aria-label="Scroll down"
        className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
        </svg>
      </a>
    </div>
  )
}
