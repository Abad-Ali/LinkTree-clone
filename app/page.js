"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Carousel from "@/components/Carousel";

export default function Home() {
  const router = useRouter()
  const [text, setText] = useState("")

  const createLinktree = ()=>{
    router.push(`/generate?handle=${text}`)
  }
  return (
    <main>
      <section className="bg-[#254f1a] min-h-[130vh] md:grid md:grid-cols-2 w-3xl md:w-full">
        <div className="flex justify-center flex-col ml-[5vw] gap-5 pt-56 md:pt-0">
          <p className="text-[#d2e823] text-6xl font-black">Everything you are.<br></br> In one, simple link in bio.</p>
          <p className="text-[#d2e823] text-lg font-semibold">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>

          <div className="input flex gap-5 mt-7">
            <input value={text} onChange={(e)=> setText(e.target.value)} className=" bg-white px-4 py-4 focus:outline-green-400 rounded-lg text-xl" type="text" placeholder="linktr.ee/yourname" />
            <button onClick={()=>createLinktree()} className="bg-[#e9c0e9] px-5 py-4 rounded-full text-xl hover:cursor-pointer">Claim your Linktree</button>
          </div>

        </div>
        
        <div className="flex items-center justify-center flex-col mr-[5vw]">
          <img src="/img.png" alt="home1_img" />
        </div>
      </section>

      <section className="bg-[#e9c0e9] min-h-[130vh] md:grid md:grid-cols-2 w-3xl md:w-full">
        <div className="hidden md:block">
          <div className="flex items-center justify-center flex-col mr-[5vw]">
            <img src="/img2.png" alt="home2_img" />
          </div>
        </div>

        <div className="flex justify-center flex-col ml-[5vw] gap-5 pt-10 md:pt-0">
          <p className="text-[#502274] text-6xl font-black">Create and customize your Linktree in minutes</p>
          <p className="text-[#502274] text-lg font-semibold">Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</p>

          <div className="input flex gap-5 mt-7">
            <Link href="/generate"><button className="bg-[#502274] px-5 py-4 rounded-full text-xl text-white font-semibold hover:cursor-pointer">Get started for free</button></Link>
          </div>

        </div>

        <div className="block md:hidden">
          <div className="flex items-center justify-center flex-col mr-[5vw]">
            <img src="/img2.png" alt="home2_img" />
          </div>
        </div>
      </section>

      <section className="bg-[#780016] min-h-[130vh] md:grid md:grid-cols-2 w-3xl md:w-full pt-10 md:pt-0">
        <div className="flex justify-center flex-col ml-[5vw] gap-5">
          <p className="text-[#e9c0e9] text-6xl font-black">Share your Linktree from your Instagram, TikTok, Twitter and other bios</p>
          <p className="text-[#e9c0e9] text-lg font-semibold">Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.</p>

          <div className="input flex gap-5 mt-7">
            <Link href="/generate"><button className="bg-[#e9c0e9] px-5 py-4 rounded-full text-xl hover:cursor-pointer">Get started for free</button></Link>
          </div>

        </div>
        
        <div className="flex items-center justify-center flex-col mr-[5vw]">
          <img src="/img3.png" alt="home3_img" />
        </div>
      </section>

      <section className="bg-[#f3f3f1] min-h-[100vh] md:grid md:grid-cols-2 w-3xl md:w-full">
        <div className="hidden md:block">
          <div className="flex items-center justify-center flex-col mr-[5vw]">
            <img src="/img4.png" alt="home4_img" />
          </div>
        </div>

        <div className="flex justify-center flex-col ml-[5vw] gap-5 pt-10 md:mt-0">
          <p className="text-black text-6xl font-black">Analyze your audience and keep your followers engaged</p>
          <p className="text-black text-lg font-semibold">Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back..</p>

          <div className="input flex gap-5 mt-7">
            <Link href="/generate"><button className="bg-[#e9c0e9] px-5 py-4 rounded-full text-xl hover:cursor-pointer">Get started for free</button></Link>
          </div>

        </div>

        <div className="block md:hidden">
          <div className="flex items-center justify-center flex-col mr-[5vw]">
            <img src="/img4.png" alt="home4_img" />
          </div>
        </div>
      </section>
      
      <section className="bg-[#f3f3f1] w-3xl md:w-full">
        <div className=" flex justify-center">
          <p className="text-black text-4xl md:text-5xl font-black">The only link in bio trusted by 50M+</p>
        </div>
        <div className=" flex justify-center">
          <p className="text-[#2665D6] text-5xl font-black">merch sellers</p>
        </div>
        <div className="carousel bg-[#f3f3f1] pt-10">
           <Carousel/>
        </div>
      </section>

      <section className="bg-[#f3f3f1] min-h-[100vh] md:grid md:grid-cols-2 w-3xl md:w-full gap-5 pt-24">
        <div className="flex justify-center flex-col ml-[5vw] gap-5 mr-[5vw] md:mr-[0vw]">
          <div className="bg-[#e9c0e9] rounded-4xl min-h-[65vh] flex items-center justify-center">
            <div className="">
              <div className="flex justify-center mb-10">
                <img src="/section1img.png" alt="section1img_img" />
              </div>
              <div className="flex ">
                <p className="text-4xl text-[#5022a6] font-bold underline">Share your content in limitless<br></br> ways on your Linktree.</p>
              </div>
            </div>
          </div>

          <div className=" bg-[#d2e823] rounded-4xl min-h-[65vh] flex items-center justify-center">
          <div className="">
            <div className="flex justify-center mb-10">
              <img src="/section2img.png" alt="section2img_img" />
            </div>
            <div className="flex ">
              <p className="text-4xl text-black font-bold underline">Sell products and collect<br></br> payments.It's monetization<br></br> made simple.</p>
            </div>
            </div>
          </div>

        </div>
        
        <div className="flex items-center justify-center flex-col mr-[5vw] bg-[#780016] rounded-4xl min-h-[70vh] mt-[5vh] md:mt-0 ml-[5vw] md:ml-0 py-14 md:py-0">
        <div className="">
              <div className="flex justify-center mb-10">
                <img src="/section3img.png" alt="section3img_img" />
              </div>
              <div className="flex ">
                <p className="text-4xl text-[#E9C0E9] font-bold underline">Grow, own and engaged<br></br>your audience by unifying<br></br>them in one place.</p>
              </div>
            </div>
        </div>
      </section>
      <section className="bg-[#f3f3f1] min-h-[100vh] w-3xl md:w-full">
        <div className="flex justify-center pt-24">
          <p className="text-6xl font-black">The fast, friendly and powerful link in bio tool.</p>
        </div>
        <div className="flex justify-center py-14">
          <Link href="/generate"><button className="bg-[#E9C0E9] hover:bg-[#e2b9e4] hover:cursor-pointer p-4 px-7 rounded-full text-lg font-semibold">Explore all plans</button></Link>
        </div>
        <div className="flex justify-center gap-7">
          <div className="bg-white rounded-4xl px-7 pt-24 flex flex-col justify-center">
            <div className="flex justify-center"><img src="/div1img.png" alt="div1img_img" width={350} /></div>
            <p className="pt-28 pb-7 flex justify-center text-center font-semibold">Seamlessly connect your Linktree with the<br></br> tools you already use.</p>
          </div>
          <div className="bg-white rounded-4xl px-14 pt-7 flex flex-col justify-center">
          <  div className="flex justify-center"><img src="/div2img.png" alt="div3img_img" width={290} /></div>
            <p className="pt-26 pb-10 flex justify-center text-center font-semibold">Customize your Linktree to match your <br></br>brand. Make it feel like you.</p>
          </div>
          <div className="bg-white rounded-4xl px-7 pt-24 flex flex-col justify-center">
            <div className="flex justify-center"><img src="/div3img.png" alt="div3img_img" width={350} /></div>
            <p className="pt-28 pb-7 flex justify-center text-center font-semibold">Manage, update and schedule content<br></br> with our quick, easy editor.</p>
          </div>
        </div>
      </section>
      <section className="bg-[#f3f3f1] w-3xl md:w-full">
        <div className="flex justify-center pt-42"><p className="text-6xl font-black">As featured in...</p></div>
        <div className="flex justify-center items-center p-18 flex-wrap gap-3">
          <div className="bg-white text-slate-600 text-3xl font-black px-34 py-7 rounded-4xl">TC</div>
          <div className="bg-white text-slate-600 text-xl  px-28 py-7 rounded-4xl">INSIDER</div>
          <div className="bg-white text-slate-600 text-xl font-black px-28 py-7 rounded-4xl">Mashable</div>
          <div className="bg-white text-slate-600 text-xl font-bold px-28 py-7 rounded-4xl">FORTUNE</div>
          <div className="bg-white text-slate-600 text-xl font-semibold px-28 py-7 rounded-4xl">Forbes</div>
        </div>
      </section>
    </main>
  );
}
