import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen p-8 ml-20 ">
    <h1 className="text-3xl font-bold mb-6 justify-center">Contact ME</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="p-6 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors">
        <h2 className="text-xl font-semibold mb-2">Project 1</h2>
        <p className="text-foreground/70">Project description goes here</p>
      </div>
    </div>
  </div>
  )
}

export default page
