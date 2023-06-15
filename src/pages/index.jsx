import React from 'react';
import jemolook from "../../src/assets/jemo.png";
import handcraft from "../../src/assets/handcraft.jpeg";
import project from "../../src/assets/project.webp"

export default function Home() {

  return (
    <>
      <section id='about-me' className='h-screen flex 
    items-center gap-12'>
        <div className='basis-1/2'>
          <h3 className='mb-4 text-2xl'>👋 Hi client, I am...</h3>
          <h1 className='mb-6 text-5xl antialiased bg-clip-text text-transparent font-extrabold bg-gradient-to-r from-amber-900 to-yellow-300 '>James Nzimo</h1>

          <p className='text-xl/8'>The only professional <span className='font-extrabold'> metal fabricator</span> and <span className='font-extrabold'>welder</span> you will need for your high security metal gates</p>
                
          <div className='flex gap-4 mt-4'>
            <button className='primary-btn'>book a call</button>
            <button className='secondary-btn'>browse my projects</button>
          </div>

        </div>
        <img className='basis-1/2 w-full h-96 transition-all  hover:grayscale z-50 object-cover object-top' src={jemolook} alt="james nzimo profile" />
      </section>

      <section id='services' className='h-screen'>
        <div className='flex justify-between items-center'>
          <img className='basis-1/2' src={handcraft} alt="handcraft design" />
          <div className='basis-1/2'>
            <h3>I Hand craft your design</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Volutpat dictum vitae libero gravida nec orci urna. At sollicitudin malesuada viverra id.</p>
            <div>
              <img src={project} alt="project" />
              <img src={project} alt="project" />
              <img src={project} alt="project" />
              <img src={project} alt="project" />
              <img src={project} alt="project" />
            </div>
            <button>see more</button>
          </div>
        </div>
      </section>
    </>
  )
}

{/* <div className='flex gap-6 mt-12 pt-4 border divide-x divide-amber-800'>
<div className='flex flex-col items-center text-center'>
  <h2 className='text-2xl font-bold text-amber-900'>6+</h2>
  <p>years in business</p>
</div>
<div className='flex flex-col items-center text-center'>
  <h2 className='text-2xl font-bold text-amber-900'>250+</h2>
  <p>succesfully completed projects</p>
</div>
<div className='flex flex-col items-center text-center'>
  <h2 className='text-2xl font-bold text-amber-900'>60+</h2>
  <p>happy customers</p>
</div>
</div> */}
