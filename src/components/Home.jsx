import React from 'react';
import Img from '../assets/Willie.png';
import circle from '../assets/circle.png';
// import img2 from '../assets/img2.png';
// import jawline from '../assets/jawline.jpg';
// import meSerious from '../assets/meSeriousGlare.jpg';
import spectre from '../assets/spectreEdited.png';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';

const Home = () => {
	return (
		<div className='md:px-10 px-7 my-14 md:h-screen bg-[#1a1a29]' id='home'>
			<div>
				<div className='flex flex-col md:flex-row items-center justify-between w-full'>
					{/* image & content */}
					{/* text */}
					<div className='text-white'>
						<h6 className='text-3xl mt-12'>Hello, I'm</h6>
						<h1 className='font-semibold md:text-5xl my-4 text-3xl'>
							<Typewriter
								options={{
									strings: ['Edet Ekpo'],
									autoStart: true,
									loop: true,
								}}
							/>
						</h1>
						<p className='md:w-96'>
							Adaptable Web Developer & Tech Enthusiast, creating delightful
							digital experiences. 🚀
						</p>
						<div className='mt-5'>
							<Link to='about'>
								<button className='btn transition-all duration-500 bg-primary py-2 px-4 rounded text-white hover:bg-white hover:text-primary'>
									About me
								</button>
							</Link>
							<Link to='projects'>
								<button className='btn outline py-1.5 px-6 rounded border-none ml-5 text-white '>
									Projects
								</button>
							</Link>
						</div>
					</div>
					{/* img */}
					<div className='order-first md:order-last relative'>
						<img
							src={spectre}
							alt=''
							width={425}
							height={425}
							style={{ borderRadius: '50%' }}
						/>
					</div>
				</div>
			</div>
			<div className='h-24 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block mt-24'></div>
		</div>
	);
};

export default Home;
