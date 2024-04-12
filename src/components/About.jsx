import React from 'react';
import Services from './Services';
import code from '../assets/icons-file/code.png';
import android from '../assets/icons-file/android.png';
import blockchain from '../assets/icons-file/blockchain.png';
import script from '../assets/icons-file/script.png';
const About = () => {
	const skills = [
		{ name: 'WEB DEVELOPMENT', image: code },
    { name: 'MOBILE DEVELOPMENT', image: android },
    { name: 'BLOCKCHAIN DEVELOPER (Jnr)', image: blockchain },
		{
			name: 'JAVASCRIPT DEVELOPER',
			image: script,
		},
	];
	return (
		<div className='md:px-10 px-7 sm:-mt-24' id='about'>
			<h1 className='text-primary font-semibold text-3xl mt-5'>About me:</h1>
			<p className='my-3 text-white md:w-2/3 leading-[2]'>
				Hi there, I'm Eddy, a tech enthusiast with a passion for Web3 and AI. My
				journey has led me to become a Frontend web developer and
				experienced Mobile developer. With a strong foundation in Web
				Development and a deep understanding of advanced UI design principles,
				here are my key skills:
			</p>
			<div className='md:flex my-7 items-center'>
				<div className='text-primary text-8xl font-bold'>5+</div>
				<p className='text-white text-2xl md:ml-5'>
					Years of professional experience. Specialised in building apps, while ensuring a
					seamless web experience for end users.
				</p>
			</div>

			{/* skills */}
			<div className='flex flex-col md:flex-row '>
				{skills.map((skill, index) => (
					<div
						key={index}
						className='md:w-[256px] md:h-[254px] bg-light hover:bg-primary flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500'
					>
						<img src={skill.image} alt={skill.name} />
						<p className='mt-3 text-2xl text-white font-semibold'>
							{skill.name}
						</p>
					</div>
				))}
			</div>

			{/* services section */}
			<Services />
		</div>
	);
};

export default About;
