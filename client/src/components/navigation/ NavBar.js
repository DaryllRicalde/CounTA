import React from 'react'

function  NavBar() {
  return (
    <div class='bg-black'>
        <nav class="flex justify-center space-x-4 p-2 bg-black text-red-600">
            <p class="font-semibold text-2xl py-1">DOTA2 Captain's Counter</p>
            <a href="/dashboard" class="font-bold text-red-600 px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
            <a href="/team" class="font-bold text-red-600 px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Team</a>
            <a href="/projects" class="font-bold text-red-600 px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</a>
            <a href="/reports" class="font-bold text-red-600 px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Reports</a>
        </nav>
    </div>
  )
}

export default  NavBar