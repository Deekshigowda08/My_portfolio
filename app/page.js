"use client"
import React, { useState, forwardRef, useEffect, useRef } from 'react'
import Meteors from ".//meteors.js";
import TypingAnimation from './/typingtext.js';
import { FiInstagram } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import ShineBorder from ".//secondpage.js";
import { AnimatedBeam } from ".//beam.js";
import IconCloud from ".//rounded.js"
import Link from 'next/link.js';
import { ToastContainer, toast } from 'react-toastify';
import Image from 'next/image'
import emailjs from 'emailjs-com';



 
const Circle = forwardRef(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={
          "z-10  h-[40vh] w-[15vw] circlesize justify-center rounded-2xl border bg-black p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"}
      >
        {children}
      </div>
    );
  }
);

const page = () => {
  const texts = ["Engineering Student", "Full Stack Devol∞per", "Basic Level Video Editor", "Basic Level Web Designer"];
  const [color, setColor] = useState('#FFFF00');
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const submited = useRef(null)
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [text, setmessage] = useState("")
  const sendEmail=async (e)=>{
    e.preventDefault();
    submited.current.style.backgroundColor="red"
    submited.current.innerText="Processing"
    if (name=="" && email=="" &&text=="") {
      submited.current.style.backgroundColor="lightblue"
      submited.current.innerText="Try Again"
  }else{
    const temp={
     from_name:email,
     to_name:name,
     message:text
    }
   emailjs
     .send('service_16yq6gb', 'template_zeruuwm',temp,
       'e5_TZqzT5rVI6QPRy'
     )
     .then(
       () => {
         setname("");setemail("");setmessage("");
        submited.current.style.backgroundColor="#b3e8b2"
        submited.current.innerText="Done"
       },
       (error) => {
         submited.current.style.backgroundColor="lightblue"
         submited.current.innerText="Try Again"
       },
     );
  }
  };
  const slugs = [
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "vercel",
    "git",
    "github",
    "visualstudiocode",
    "figma",
    "python",
    "c",
    "cpp","mongodb","mongoose","tailwind","django","postman"
  ];

  useEffect(() => {
    const colors = ['#98FF98', '#FFDAB9', '#B0E0E6', '#FFFF00', '#00FFFF', "#4169E1", "#DC143C", "#50C878", "#36454F", "#003366", "#800020", "#D3D3D3", "#F5F5DC", "#E6E6FA"];
    const changeColor = () => {
      const newColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(newColor);
    };
    const intervalId = setInterval(changeColor, 5000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="relative  w-full h-screen bord01  grid place-content-center overflow-hidden rounded-lg  bg-black md:shadow-xl">
        <Meteors  number={150} className="hidden sm:block" />
        <div className='text-white  w-[80vw] h-[90vh] firstpage rounded-xl bg-white flex '>
          <div className='w-[60%] phonediv h-full p-10'>
            <div><span className='sm:text-black font-serif font-bold fontsize01 text-3xl'>Hey,It's <span className='text-purple-500 sm:text-purple-800 fontsize01 smalltext font-serif font-bold text-3xl'>Deekshith H R</span> </span></div>
            <div className='w-[70%]  sm:hidden  grid place-content-center h-[20%] my-1 mx-auto '>
            <div className='w-[80%] h-[50%] photo rounded-full  overflow-hidden' style={{
              width: '100px',
              height: '100px',
              border: "2px solid black",
              backgroundColor: color,
              transition: 'background-color 1s ease-in-out',
            }}><Image
                className='rotate-6  '
                src="/profile.png"
                width={320}
                height={320}

                alt="Picture of the author"
              /></div>
          </div>
            <div><span className='sm:text-black font-serif fontsize font-bold text-2xl'>I'm a <span className='text-purple-500 sm:text-purple-800 font-serif  font-bold text-2xl fontsize'> <TypingAnimation texts={texts} duration={100} className="custom-class " /> </span> </span></div>
            <div className='sm:text-black font-serif font-semibold text-lg'><p class=" first-line:tracking-widest first-letter:text-7xl first-letter:font-bold sm:first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left">I am an AIML student at the University of Visvesvaraya College of Engineering in Bengaluru. I have knowledge in web development and programming languages including Python, JavaScript, C, and C++. Additionally, I am a basic-level video editor with a strong enthusiasm for technology-related subjects. My passion drives me to continuously explore and learn new technologies.</p></div>
            <div className='sm:hidden text-red-600 text-xs font-semibold font-serif'>* Use Laptop or Deskpot for better view</div>
            <div className='flex pl-4 margin center mt-10 sm:text-black'><div className='flex border  rounded-md p-3 gap-4'>
              <Link href="https://www.instagram.com/__deekshith_gowda__08?utm_source=qr&igsh=eDc1eGN6NnVvMWxo" className='hover:bg-gray-200 hover:p-2 hover:rounded-full cursor-pointer'><FiInstagram /></Link>
              <Link href="https://github.com/Deekshigowda08" className='hover:bg-gray-200 hover:p-2 hover:rounded-full cursor-pointer'><IoLogoGithub /></Link>
              <Link href="https://x.com/deekshigowda80?t=TEhWlTDVMvPhidi8VbGuyw&s=08 " className='hover:bg-gray-200 hover:p-2 hover:rounded-full cursor-pointer'><BsTwitterX /></Link>
              <Link href="https://www.linkedin.com/in/deekshith-gowda-019b56305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className='hover:bg-gray-200 hover:p-2 hover:rounded-full cursor-pointer'><FaLinkedin /></Link>
            </div>
                
            </div>

          </div>
          <div className='w-[40%] hiding grid place-content-center h-full m-2 '>
            <div className='w-[300px] h-[300px]  rounded-full overflow-hidden' style={{
              width: '300px',
              height: '300px',
              border: "2px solid black",
              backgroundColor: color,
              transition: 'background-color 1s ease-in-out',
            }}><Image
                className='rotate-6'
                src="/profile.png"
                width={320}
                height={320}

                alt="Picture of the author"
              /></div>
          </div></div>
      </div>
      <div className='relative  w-full h-screen  bord grid place-content-center overflow-hidden rounded-lg  bg-black md:shadow-xl'>
        <ShineBorder
          className="relative flex  h-[90vh]   w-[80vw] flex-col secondpage  overflow-hidden sm:rounded-lg border-t sm:border-2 bg-background md:shadow-xl"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <div><span className='text-purple-800 font-serif font-bold text-3xl'>Education</span></div>
          <div
            className="relative flex w-full   justify-center overflow-hidden rounded-lg  bg-background p-10 "
            ref={containerRef}
          >
            <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
              <div className="flex flexchanging flex-row justify-between">
                <Circle ref={div1Ref} className="flex  circlesize">
                  <div className='text-yellow-300 font-bold text-xl font-serif'>1 to 10</div>
                  <div><p class="font-serif font-semibold text-xs first-line:tracking-widest first-letter:text-4xl  sm:first-letter:text-7xl first-letter:font-bold text-white first-letter:mr-3 chikka first-letter:float-left">I completed my education from 1st to 10th grade at Jyothir Vikas English Medium School in Kadabagere, securing 93% in my 10th grade.</p></div>
                </Circle>
                <Circle ref={div2Ref} className="flex circlesize">
                  <div className='text-yellow-300 font-bold text-xl font-serif'>PUC</div>
                  <div><p class="font-serif font-semibold text-xs first-line:tracking-widest first-letter:text-4xl sm:first-letter:text-7xl first-letter:font-bold text-white first-letter:mr-3 chikka first-letter:float-left">I completed my PUC at BGS PU College, Chikkamagaluru, specializing in the science stream with computer science as an optional subject. There, I learned the basics of computing and C++ programming.</p></div>
                </Circle>
                <Circle ref={div3Ref} className="flex circlesize">
                  <div className='text-yellow-300 font-bold text-xl font-serif'>Engineering</div>
                  <div><p class="font-serif font-semibold text-xs first-line:tracking-widest sm:first-letter:text-5xl first-letter:text-4xl first-letter:font-bold text-white first-letter:mr-3 chikka first-letter:float-left">I have joined the University of Visvesvaraya College of Engineering in Bengaluru through the CET competitive exam conducted by the Karnataka government, and I have chosen Artificial Intelligence and Machine Learning as my branch of study.</p></div>
                </Circle>

              </div>
            </div>

            <AnimatedBeam
              duration={8}
              containerRef={containerRef}
              fromRef={div1Ref}
              toRef={div3Ref}
            />
          </div>
        </ShineBorder>
      </div>
      <div className="relative  w-full h-screen grid place-content-center overflow-hidden rounded-lg  bg-black md:shadow-xl">
        <div className="relative  h-[90vh] firstpage skills w-[80vw] items-center justify-center  sm:rounded-lg p-1 border-t sm:border bg-white ">
          <div className='w-full text-center'><span className='text-purple-800 font-serif font-bold text-3xl'>Skills</span></div>
          <div className='flex flexchanging w-full  phonesize1 h-[90%]'><div className='w-[50%] page03 p-20'>
            <ul className='list-disc list font-serif font-semibold text-xs'>
              <li><div className='text-xl text-violet-800'>Things which i can do.</div>
                <div className='px-3 '><ul>
                  <li>* Web Delopment</li>
                  <li>* Basic level Video Editing </li>
                  <li>* Basic level poster Editing</li></ul></div>
              </li>
              <li><div className='text-xl text-violet-800'>Programing language i know.</div>
                <div className='px-3'><ul>
                  <li>* C++</li>
                  <li>* C</li>
                  <li>* Python</li>
                  <li>* javascript</li>
                </ul></div>
              </li>
              <li><div className='text-xl text-violet-800'>Language which i know.</div>
                <div className='px-3'><ul>
                  <li>* Kannada</li>
                  <li>* English</li>
                  <li>* Hindi</li>
                </ul></div>
              </li>
              <li><div className='text-xl text-violet-800'>Softwares which i use.</div>
                <div className='px-3'>
                  <ul>
                    <li>* Visual Studio</li>
                    <li>* Davinci Resolve</li>
                    <li>* Picsart</li>
                    <li>* Capcut</li>
                    <li>* Canva</li>
                  </ul></div>
              </li></ul>
              
            </div>
            <div className='w-[50%] page031'><IconCloud iconSlugs={slugs} /></div>
          </div>
        </div>
       </div>
       <div className='relative  w-full h-screen grid place-content-center overflow-hidden rounded-lg  bg-black md:shadow-xl'>
       <div className="relative  h-[90vh] z-10 firstpage w-[80vw] items-center justify-center  sm:rounded-lg border-t sm:border bg-white ">
        <div className='w-full text-center'><span className='text-purple-800 font-serif font-bold text-3xl'>Projects</span></div>
        <div className='h-[20%] w-[90%] page04 mx-10 my-3 rounded-lg px-4 py-3 border '><p class="font-serif font-semibold  fourth sm:text-xs smallfont text-black ">Here are some of my web development projects created using a variety of technologies. I have utilized JavaScript, HTML, CSS, React.js, Next.js, Express.js,Django, Mongoose, MongoDB, and Figma to build these projects. Each project demonstrates my skills in front-end and back-end development, as well as UI/UX design. From dynamic web applications to responsive user interfaces, these projects showcase my ability to integrate different frameworks and tools effectively. My experience with databases like MongoDB and design tools like Figma further highlights my comprehensive approach to web development. </p></div>
        <div className='w-full sm:grid grid-cols-3  gridrow place-content-center gap-4 gap-y-2 h-[70%]'>
          <div className='grid place-content-center gridsize'><div className='grid place-content-center relative'><Image className='z-10 gridsize01' src='/Black-Frame.png' alt="Logo" width={150} height={100} />
          <video className='absolute sm:ml-2 mt-2 ml-11 sm:mt-3 z-0 gridsize02 ' width={'140px'}  loop muted autoPlay  src="/sgpaproject.mp4"/></div>
          <div className='sm:text-black font-bold text-[10px] font-serif'>Project Name:SGPA calculator <br />Link: <a href='https://deekshigowda08.github.io/Calculator/'>Check here for Webpage</a> </div></div>
          <div className='grid place-content-center '><div className='grid place-content-center relative'><Image className='z-10 gridsize01' src='/Black-Frame.png' alt="Logo" width={150} height={100} />
          <video className='absolute sm:ml-3 mt-2 ml-11 sm:mt-3 z-0 gridsize02  ' width={'140px'}  loop muted autoPlay src="/spotifyproject.mp4"/></div>
          <div className='sm:text-black font-bold text-[10px] font-serif'>Project Name:Spotify Clone <br />Link: <a href='https://github.com/Deekshigowda08/spotifyclone'>Source Code(Check here)</a> </div></div>
          <div className='grid place-content-center gridsize '><div className='grid place-content-center relative'><Image className='z-10 gridsize01 ' src='/Black-Frame.png' alt="Logo" width={150} height={100} />
          <video className='absolute sm:ml-3 mt-2 ml-11 sm:mt-3 z-0 gridsize02 ' width={'140px'}  loop muted autoPlay src="/twitterproject.mp4"/></div>
          <div className='sm:text-black font-bold text-[10px] font-serif'>Project Name:Twitter Clone<br />Link: <a href='https://github.com/Deekshigowda08/twitterclone'>Source Code(Check here)</a> </div></div>
          <div className='grid place-content-center gridsize'><div className='grid place-content-center relative'><Image className='z-10 gridsize01' src='/Black-Frame.png' alt="Logo" width={150} height={100} />
          <video className='absolute sm:ml-3 mt-2 ml-11 sm:mt-3 z-0 gridsize02  ' width={'140px'}  loop muted autoPlay src="/expenditureproject.mp4"/></div>
          <div className='sm:text-black font-bold text-[10px] font-serif'>Project Name:Expenditure Calc<br />Link: <a href='https://expenditure-manager-08.vercel.app/'>Check here for Webpage</a> </div></div>
          <div className='grid place-content-center gridsize'><div className='grid place-content-center relative'><Image className='z-10 gridsize01' src='/Black-Frame.png' alt="Logo" width={150} height={100} />
          <video className='absolute sm:ml-3 mt-2 ml-11 sm:mt-3 z-0 gridsize02 ' width={'140px'}  loop muted autoPlay src="/gstcalculatorproject.mp4"/></div>
          <div className='sm:text-black font-bold text-[10px] font-serif'>Project Name:Dynamic GST calc <br />Link: <a href='https://github.com/Deekshigowda08/Dynamic_gst_calculator'>Source Code(Check here)</a> </div></div>
          <div className='grid place-content-center gridsize'><div className='grid place-content-center relative'><Image className='z-10 gridsize01' src='/Black-Frame.png' alt="Logo" width={150} height={100} />
          <video className='absolute sm:ml-3 mt-2 ml-11 sm:mt-3 z-0 gridsize02  ' width={'140px'}  loop muted autoPlay src="mytaskproject.mp4"/></div>
          <div className='sm:text-black z-50 font-bold text-[10px] font-serif'>Project Name:Mytask<br />Link: <a href='https://github.com/Deekshigowda08/my-task'>Source Code(Check here)</a> </div></div>
          
    </div>
    </div>
       </div>
       <div className="relative  w-full h-screen lastpage z-0 grid place-content-center overflow-hidden rounded-lg  bg-black md:shadow-xl">
       <div className="relative  h-[90vh] w-[80vw] firstpage  items-center justify-center border-t  sm:rounded-lg sm:border bg-white ">
       <div className='w-full h-[10%] text-center'><span className='text-purple-800 font-serif font-bold text-3xl'>Contact me</span></div>
        
          <div className='flex justify-center align-middle w-[100%] h-[90%]'>
            <div className=' w-[90%] flex justify-center align-middle h-[90%] border-2 rounded-2xl'>
              <div className='w-[60%] input flex flex-col align-middle justify-center h-[100%]'>
              <input type="email" value={name} onChange={(e)=>{
                setname(e.target.value)
              }} required className='w-full  px-5 py-3 change border-2 border-neutral-600 my-3 placeholder:text-gray-500 sm:placeholder:text-md placeholder:text-xs placeholder:font-serif' placeholder='Enter your email.' />
              <input type="text" value={email} onChange={(e)=>{
                setemail(e.target.value)
              }} className='w-full px-5 change py-3 border-2 border-neutral-600 my-3 placeholder:text-gray-500 sm:placeholder:text-md placeholder:text-xs placeholder:font-serif' placeholder='Enter your name.' />
              <textarea id="paragraph" value={text} onChange={(e)=>{
                setmessage(e.target.value)
              }} name="paragraph" class="w-full change h-[40%] px-5 py-3 my-3 border-2 border-neutral-600  placeholder:text-gray-500 placeholder:text-md placeholder:font-serif" placeholder="Text here"></textarea>
              <div className='w-full mt-5 h-[20%] flex justify-center align-middle'><button ref={submited} className='w-[20%] h-[60%] button bg-black rounded-xl text-sm font-serif font-bold  border-gray-500 border-2 text-white' onClick={sendEmail}>Send mail</button></div>
              </div></div>

          
        </div>
       </div>
       </div>
      </>
      )
}

      export default page