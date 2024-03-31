import React from 'react'

const AuditsHero = () => {
  return (
    <>
      <div className="container mt-12 mb-48 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <h2 className="mb-20 text-4xl font-bold">How do Poirot audits work?</h2>
          <div className="mt-36 grid lg:grid-cols-3 lg:gap-x-12">
            <div className="mb-12 lg:mb-0">
              <div
                className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  stroke='currentColor' className='w-7 h-7'><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-semibold">Active</h5>
                  <p>
                    Laudantium totam quas cumque pariatur at doloremque hic quos
                    quia eius. Reiciendis optio minus mollitia rerum labore
                    facilis inventore voluptatem ad, quae quia sint.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12 lg:mb-0">
              <div
                className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke='currentColor' className='w-7 h-7'><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>               
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-semibold">Completed</h5>
                  <p>
                    Eum nostrum fugit numquam, voluptates veniam neque quibusdam
                    ullam aspernatur odio soluta, quisquam dolore animi mollitia a
                    omnis praesentium, expedita nobis!
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <div
                className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" stroke='currentColor' className='w-7 h-7'><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"/></svg>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-semibold">Upcoming</h5>
                  <p>
                    Enim cupiditate, minus nulla dolor cumque iure eveniet facere
                    ullam beatae hic voluptatibus dolores exercitationem? Facilis
                    debitis aspernatur amet nisi?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='flex items-center justify-center mt-36 mb-8'>
          <h1 className="mb-16 ml-4 bg-gradient-to-r from-indigo-800 to-purple-400 font-bold inline-block text-transparent bg-clip-text text-5xl text-center">Poirot Audits</h1>
      </div>          
    </>
  )
}

export default AuditsHero