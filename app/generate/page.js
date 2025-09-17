"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
// import 'react-toastify/dist/ReactTostify.css';

const Generate = () => {
  
  const searchParams = useSearchParams()

  const [links, setlinks] = useState([{link : "", linktext : ""}])
  const [handle, sethandle] = useState(searchParams.get('handle'))
  // const [handle, sethandle] = useState("")
  const [pic, setpic] = useState("")
  const [desc, setdesc] = useState("")

  // const notify = () => toast("Wow so easy!");
  const handleChange = (index, link, linktext)=>{
    setlinks((initialLinks)=>{
      return initialLinks.map((item,i)=>{
        if(i==index){
          return {link, linktext}
        }else{
          return item
        }
      })
    })
  }

  const addLink = () => { 
    setlinks(links.concat([{link: "", linktext: ""}]))
    }

  const submitLinks = async()=>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "links": links, 
      "handle": handle,
      "pic": pic,
      "desc": desc
    });

    // console.log(raw)
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    const r = await fetch("http://localhost:3000/api/add", requestOptions)
      const result = await r.json()
      if(result.success){ 
       toast.success(result.message)
       setlinks([{link: "", linktext: ""}])
       setpic("")
       sethandle("")
       setdesc("")
      }
      else{
        toast.error(result.message)
      }
    }
  
  return (
    <>
    <ToastContainer />
    <div className='bg-[#e9c0e9] min-h-[150vh] md:grid grid-cols-2 w-3xl md:w-full pt-60 md:pt-0 pb-[73vh] md:pb-0'>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='font-black font-serif text-6xl md:text-5xl mb-14 md:mb-0 md:mt-28'>Generate your Linktree</h1>
        <div className='flex flex-col gap-5 my-7'>

          <h2 className='font-semibold text-2xl'>Step 1: Claim your handle </h2>
          <div className='mx-4'>
            <input value={handle.toLowerCase() || ""} onChange={e=>{sethandle(e.target.value)}} className='bg-green-50 focus:outline-blue-700 px-5 py-3 rounded-3xl font-semibold mx-2 ml-7' type='text' placeholder='Choose a Handle' />
          </div>

          <h2 className='font-semibold text-2xl'>Step 3: Add links </h2>
          <div className='mx-4'>
            {links && links.map((item, index)=>{
              return<div key={index} className='m-2'><input value={item.linktext || ""} onChange={e=>{handleChange(index, item.link, e.target.value)}} className='bg-green-50 focus:outline-blue-700 px-5 py-3 rounded-3xl font-semibold mx-2 ml-7'  type='text' placeholder='Enter name of the link' />
              <input value={item.link || ""} onChange={e=>{handleChange(index, e.target.value, item.linktext)}} className='bg-green-50 focus:outline-blue-700 px-5 py-3 rounded-3xl font-semibold mx-2 ' type='text' placeholder='Enter the URL' />
            </div>})}
            <div className='flex justify-center'><button onClick={()=> addLink()} className='bg-slate-900 text-white py-1.5 px-3 rounded-2xl font-bold mt-5 hover:cursor-pointer hover:bg-slate-800'>Add more...</button></div>
          </div>

          <h2 className='font-semibold text-2xl'>Step 4: Add your profile pic and Finalize

          </h2>
          <div className='mx-4 flex flex-col'>
            <input value={pic || ""} onChange={e=>{setpic(e.target.value)}} className='bg-green-50 focus:outline-blue-700 px-5 py-3 rounded-3xl font-semibold mx-2 ml-7' type='text' placeholder='Enter the link of your profile pic' />
            <input value={desc || ""} onChange={e=>{setdesc(e.target.value)}} className='bg-green-50 focus:outline-blue-700 px-5 py-3 rounded-3xl font-semibold mx-2 ml-7 mt-3' type='text' placeholder='Add some description about your profile' />
            <button disabled={pic == "" || handle=="" || links[0].linktext == ""} onClick={()=>{submitLinks()}} className='bg-green-500 text-xl py-3 px-5 rounded-3xl w-11/12 m-7 font-bold hover:cursor-pointer hover:bg-green-400'>Generate your Linktree</button>
          </div>
          <div className='flex justify-center flex-col m-10'>
            <h2 className='text-3xl font-bold font-serif'>Your Linktree Link:</h2>
            <div className='flex gap-3'>
              <Link href={handle} target='_blank'><h3 className='text-2xl font-semibold font-serif text-slate-950 underline '>http://localhost:3000/{handle.  toLowerCase()}</h3></Link>
              <button onClick={() => {
                navigator.clipboard.writeText(`http://localhost:3000/${handle}`);
                if(handle == ""){
                  toast.error("Handle is empty")
                }else{
                  toast("Linktree URL copied to clipboard!");
                }}}
                 className='font-bold cursor-pointer text-xs bg-slate-500 px-2 py-1 rounded-2xl w-fit text-slate-100 hover:text-white hover:bg-slate-400 h-7 mt-3 '>Copy URL</button>
            </div>
            <p className='text-lg font-bold text-slate-700'>Remember your Linktree URL link.</p>
          </div>
        </div>
        
      </div>
      <div className='w-full h-[150vh] hidden md:block'><img className='h-full object-contain' src='/generate.png' alt='generate_img' /></div>
    </div></>
  )
}

export default Generate
