import { motion } from 'framer-motion'
import { posthog } from 'posthog-js'
import { useState, useEffect } from 'react'

const About = () => {
	const skills = [
		'React',
		'Next.js',
		'React Query',
		'Redux Toolkit',
		'MobX-State-Tree',
		'Apollo Client',
		'Recoil',
		'Tailwind CSS',
		'Node.js',
		'Express',
		'Prisma',
		'Mongoose',
		'Flask',
		'GraphQL',
		'Docker',
		'Kubernetes',
	]
	const [xCoord, setXCoord] = useState([])
	const [yCoord, setYCoord] = useState([])
	useEffect(() => {
		const ARRAY_LENGTH = 50
		const randomArrayX = []
		const randomArrayY = []

		for (let i = 0; i < ARRAY_LENGTH; i++) {
			randomArrayX.push(Math.random() * 1000)
		}
		for (let i = 0; i < ARRAY_LENGTH; i++) {
			let y = Math.random() * 1000
			if (y < 200) {
				randomArrayY.push(Math.random() * 1000)
			}
		}
		setXCoord(randomArrayX)
		setYCoord(randomArrayY)
	}, [])

	const animationVariants = {
		animate: {
			x: xCoord,
			y: yCoord,
			transition: {
				duration: 500,
				yoyo: Infinity,
			},
		},
	}
	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			transition={{ duration: 0.3 }}
			variants={{
				visible: { opacity: 1 },
				hidden: { opacity: 0 },
			}}
			id='about'
			className='relative h-[100vh] my-[150px]  px-6 lg:px-16 max-w-[1400px] mx-auto'>
			{/* Project blob animation */}
			{/* <motion.div
				variants={animationVariants}
				animate='animate'
				className='absolute top-[0px] -left-4 w-[700px] h-[700px] rounded-full bg-[#877eff] filter blur-[300px] z-0 hidden lg:grid'></motion.div>
			<div className='grid lg:hidden absolute top-[200px] -left-[600px] w-[700px] h-[700px] rounded-full bg-[#6a60f5] filter blur-[300px] z-0 '></div> */}
			<h1 className='text-center font-semibold text-[32px] lg:text-[40px] pb-12 lg:pb-[72px] tracking-[-1px]'>
				About me
			</h1>
			<div className='flex flex-col items-center justify-center'>
				<div className='flex flex-col justify-between'>
					<div className='flex flex-col items-center justify-center'>
						<p className='text-base text-center opacity-[84%] leading-[36px] tracking-wide '>
							Hey there! My name is Akshay and I am a full stack
							web developer with a passion for crafting
							responsive, secure, and scalable web applications. I
							specialize in using technologies like React, Next,
							Node, and Express to build user-friendly designs and
							improve the overall user experience. I am always on
							the lookout for new challenges and opportunities to
							learn and grow as a developer. Let&apos;s work
							together to bring your project to the next level!
						</p>

						<button
							onClick={() => {
								posthog.capture('resume_download', {
									property: 'downloaded',
								})
							}}
							className='px-8 py-[14px]  relative rounded-lg mt-12 group overflow-hidden font-medium text-[16px] bg-gradient-to-r from-[#1745A9] to-[#A019DF] text-white inline-block'>
							<span className='absolute top-0 left-0 flex h-full w-0 mb-0 transition-all duration-200 ease-out transform translate-x-0 bg-[#1745A9] group-hover:w-full opacity-90'></span>
							<span className='relative group-hover:text-white'>
								<a
									href='/Resume.pdf'
									target='_blank'
									rel='noreferrer'>
									Get resume
								</a>
							</span>
						</button>
					</div>
					<div className='flex flex-col items-center justify-center'>
						<h2 className='text-2xl font-medium pt-12 pb-6'>
							Skills
						</h2>
						<div className='flex flex-wrap gap-4 max-w-[750px] items-center justify-center'>
							{skills.map((skill, index) => {
								return (
									<p
										key={index}
										className='px-6 py-[10px] bg-black bg-opacity-[8%]  dark:bg-white dark:bg-opacity-[8%] rounded-[8px] text-sm'>
										{skill}
									</p>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default About
