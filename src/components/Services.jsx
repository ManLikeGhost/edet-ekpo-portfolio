import React from 'react';

import ruler from '../assets/icons-file/ruler-pen.png';
import code from '../assets/icons-file/code.png';
import android from '../assets/icons-file/android.png';
import gitrepo from '../assets/icons-file/git-repo.png';
import javascript from '../assets/icons-file/javascript.png';
import webscraping from '../assets/icons-file/web-scraping.png';

const services = [
    {id: 1, name:'GRAPHIC DESIGN', description:'I craft stunning graphic designs using Canva, Figma, and Sketch.', image:ruler},
    {id:2, name:'WEB DEVELOPMENT', description:'I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like ReactJS and VueJs', image:code},
    {id:3, name:'MOBILE DEVELOPMENT', description:'I am an expert mobile developer. I have experience using React Native.', image:android},
    {id:4, name:'VERSION CONTROL', description:'I can use version control systems well, and Git as my go-to tool.', image:gitrepo},
    {id:5, name:'NPM AND NODEJS', description:'I have core understanding of NPM. I can also develop general purpose applications with NodeJS, Express and NestJs', image:javascript},
    {id:6, name:'CODING', description:'I am a tech enthusiast and adept at swiftly acquiring the necessary skills to complete tasks assigned.', image:webscraping},
]


const Services = () => {
    return (
        <div>
              <h1 className="text-primary font-semibold text-3xl mt-14">The services i offer:</h1>
              <div className='grid md:grid-cols-3 my-8 gap-5'>
              {
                services.map(service => <div key={service.id} className='service-card flex flex-col justify-center items-center p-6 text-center text-white'>
                    <img src={service.image} alt="" className='mb-3' />
                    <h6 className='text-2xl mb-4'>{service.name}</h6>
                    <p className='text-base'>{service.description}</p>
                </div>)
              }
              </div>
        </div>
    );
};

export default Services;