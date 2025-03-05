import React from 'react'
import profile from '../assets/pp.jpeg'
import './Portfolio.css'

export default function portfolio() {
  return (
    <>
        <main className="bg-pink-200 h-177 flex ">
        <div className="mt-20 ml-18">
            <div className="text-purple-700 font-bold text-5xl">Hi! Its Ansubha Dhar</div>
            <p className="pt-2 font-bold text-purple-700">Electrical Engineer | Aspiring Full-Stack Developer & Problem Solver</p>
            <br/><br/>
            <p className="text-slate">I am a <b>2nd-year B.Tech Electrical Engineering</b> student at <b>Institute of Engineering & Management</b>, passionate about coding, development, and problem-solving. I enjoy working on both <b>frontend and backend</b> technologies while continuously improving my skills in <b>Data Structures, Algorithms (DSA), and Object-Oriented Programming (OOPs)</b>.</p>
            <br/>
            <div className="buttons space-x-3 mt-28">
                <button className="px-2 py-2 text-white bg-purple-900 hover:bg-purple-400 cursor-pointer rounded-xl"><a className="px-2" href="https://www.linkedin.com/in/ansubha-dhar-856176296/" target="_blank">Linkdein</a></button>
                <button className="px-2 py-2 text-white bg-purple-900 hover:bg-purple-400 cursor-pointer rounded-xl"><a className="px-2" href="https://www.instagram.com/rikstar_bro/" target="_blank">Instagram</a></button>
                <button className="px-2 py-2 text-white bg-purple-900 hover:bg-purple-400 cursor-pointer rounded-xl"><a className="px-2" href="https://github.com/Ansubha2004" target="_blank">Github</a></button>
            </div>
        </div>
        <div className="mt-20 mx-18">
            <img className="rounded-3xl border-purple-700 border-10 border-double w-450" src={profile}/>
        </div>
    </main>
    </>
  )
}
