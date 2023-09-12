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
						Connect with me:
					</h1>
					<p className='my-3 text-white md:w-3/4 leading-[2]'>
						Contact me, let's make magic together
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
				{/* form */}
				{/* <div className="md:w-1/2">
            <p className="mt-16 text-white text-2xl mb-6">Contact me, let's make magic together</p>
            <form>
                <input type="text" name="name" placeholder="Name:" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded "/>
                <input type="email" name="email" placeholder="Email:" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3"/>
                <textarea name="message" id="message" cols="54" rows="4" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-2" placeholder="Message:"></textarea>
                <button className="btn transition-all duration-500 bg-primary py-2 px-12 rounded text-white hover:bg-white hover:text-primary block">
                  Send
                </button>
            </form>
        </div> */}
			</div>
		</div>
	);
};

export default Contact;
