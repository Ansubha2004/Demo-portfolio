import React from 'react'

export default function navbar() {
  return (
    <div>
      <nav className="px-18 flex justify-between bg-purple-900">
        <span className="cursor-pointer text-pink-300 py-4 font-bold text-3xl">MY PORTFOLIO</span>
        <ul className="flex my-2 space-x-13 text-white">
            <li className="cursor-pointer py-3 hover:border-b-2 hover:border-b-pink-500 hover:text-pink-500">Home</li>
            <li className="cursor-pointer py-3 hover:border-b-2 hover:border-b-pink-500 hover:text-pink-500">About</li>
            <li className="cursor-pointer py-3 hover:border-b-2 hover:border-b-pink-500 hover:text-pink-500">Contact</li>
        </ul>
    </nav>
    </div>
  )
}
