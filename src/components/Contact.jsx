import React from 'react';
import twitter from '../assets/socials/twitterx-30.png';
import linkedIn from '../assets/socials/linkedin-30.png';
import github from '../assets/socials/github-30.png';
import email from '../assets/socials/gmail-30.png';
import medium from '../assets/socials/medium-30.png';

const Contact = () => {
	return (
		<div className='md:px-10 px-7 my-10' id='contact'>
			<div className='flex flex-col md:flex-row'>
				{/* text and icons */}
				<div className='md:w-1/2'>
					<h1 className='text-primary font-semibold text-3xl mt-16'>
						Let's make magic together:
					</h1>
					<p className='my-3 text-white md:w-3/4 leading-[2]'>
          Connect with me to see some more of my work. ✨ 
					</p>
					{/* social icons */}
					<div className='flex '>
						<a
							href='mailto:ekpoabasiama@gmail.com'
							target='_blank'
							rel='noreferrer'
						>
							<img src={email} alt='' />
						</a>

						<a
							className='ml-4'
							href='https://www.linkedin.com/in/edet-ekpo/'
							target='_blank'
							rel='noreferrer'
						>
							<img src={linkedIn} alt='' />
            </a>
            
            <a
							className='ml-4'
							href='https://github.com/ManLikeGhost'
							target='_blank'
							rel='noreferrer'
						>
							<img src={github} alt='' />
						</a>


            <a
              className='ml-4'
							href='https://twitter.com/Man_Like_Ghost'
							target='_blank'
							rel='noreferrer'
						>
							<img src={twitter} alt='' />
						</a>

						
						<a
							className='ml-4'
							href='https://medium.com/@ManLikeGhost'
							target='_blank'
							rel='noreferrer'
						>
							<img src={medium} alt='' />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
