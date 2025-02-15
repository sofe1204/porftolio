'use client'

import Brain from '@/components/brain'
import { motion, useInView, useScroll } from 'framer-motion'
import { useRef } from 'react'

const AboutPage = () => {
    const containerRef = useRef()

    const { scrollYProgress } = useScroll({ container: containerRef })

    const skillRef = useRef()
    const isSkillRefInView = useInView(skillRef, { margin: '-100px' })

    const experienceRef = useRef()
    const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' })

    return (
        <motion.div
            className='h-full'
            initial={{ y: '-200vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className='h-full overflow-scroll lg:flex' ref={containerRef}>
                {/* TEXT CONTAINER */}
                <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:pr-0 lg:w-2/3 xl:w-1/2'>
                    {/* Biography */}
                    <div className='flex flex-col gap-12 justify-center'>
                        <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
                        <p className='text-lg'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci quod quis asperiores atque obcaecati
                            enim pariatur non fugiat repellat accusamus
                            provident vel dolore dolor, reiciendis eos?
                            Aspernatur reiciendis nihil harum?
                        </p>
                        <span className='italic'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </span>
                        <div className='self-end'>
                            <motion.svg
                                width='185'
                                height='77'
                                viewBox='0 0 407 583'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M18.098 239.173C31.9841 238.478 45.7931 228.406 55.1637 219.035C67.7645 206.435 80.833 189.202 80.833 170.573C80.833 165.474 79.2971 162.607 73.6965 162.607C60.2409 162.607 53.7614 174.962 50.406 186.395C46.2015 200.722 44.7805 220.202 48.6357 234.747C51.2645 244.665 57.1692 253.815 63.2406 261.91C64.2244 263.221 67.1943 266.287 65.1769 262.408C60.8262 254.041 46.7061 248.845 38.2352 246.586C30.3341 244.479 19.8567 243.647 14.1148 250.569C6.04591 260.296 3.87762 274.331 2.77387 286.473C0.472586 311.787 3.1624 343.288 35.4691 343.288C50.7567 343.288 64.9665 337.123 77.403 328.573C83.572 324.331 91.3831 318.167 94.2209 310.87C97.2142 303.173 85.3932 305.363 83.4331 310.372C82.0714 313.852 82.4984 318.894 86.1439 320.717C96.7574 326.024 112.423 323.968 121.439 316.734C134.8 306.013 139.61 289.061 142.351 272.919C142.554 271.72 143.165 257.602 143.623 263.791C144.516 275.84 161.703 302.119 168.02 278.672C172.3 262.787 172.309 244.717 172.446 228.329C172.448 228.09 172.36 218.814 171.45 220.861C168.335 227.869 169.259 236.931 168.961 244.317C168.482 256.191 166.915 270.031 173.22 280.775C177.759 288.507 177.425 271.774 177.425 269.655C177.425 269.27 177.535 264.289 175.987 266.723C173.32 270.912 175.921 281.32 176.429 285.643C178.356 302.022 181.48 318.261 182.183 334.769C182.682 346.506 184.769 363.461 177.425 373.715C174.843 377.32 168.554 378.941 166.692 373.715C160.564 356.507 179.373 332.98 187.383 319.887C197.797 302.863 208.483 286.044 216.04 267.497C216.557 266.226 218.142 263.444 218.142 261.91C218.142 258.449 217.283 268.794 217.257 272.255C217.226 276.305 214.778 292.058 218.806 294.826C219.061 295.002 219.248 289.196 219.248 288.52C219.248 284.518 226.224 280.021 228.542 277.566C238.455 267.07 250.524 254.451 255.65 240.611C255.991 239.69 256.093 237.75 256.093 240.058C256.093 244.815 256.066 249.573 256.093 254.331C256.113 258.003 255.692 283.727 263.672 282.545C272.547 281.23 276.481 255.474 277.834 248.909C278.093 247.653 280.987 227.396 280.987 235.964C280.987 239.968 281.647 241.925 283.2 236.517C284.424 232.256 285.675 227.986 286.741 223.682C286.99 222.674 287.938 217.048 288.013 217.652C288.822 224.124 291.155 231.014 294.873 236.406C299.603 243.264 303.154 231.016 304.333 227.666C304.961 225.883 307.657 211.401 310.308 211.401C311.296 211.401 314.852 219.066 317.057 220.031C332.719 226.883 341.877 195.046 345.05 186.064C350.957 169.345 354.719 151.962 358.217 134.614C359.903 126.252 360.237 115.083 364.136 107.285C365.843 103.871 371.727 114.4 373.098 115.473C376.579 118.197 377.241 111.824 377.579 109.885C380.846 91.1918 380.255 71.376 377.911 52.6273C376.15 38.5368 373.524 22.76 365.408 10.6933C360.663 3.63704 352.082 -2.0202 345.271 6.71015C339.463 14.1552 333.809 30.2896 331.441 37.9117C324.995 58.6551 317.377 91.8448 313.185 111.932C290.346 221.356 277.07 332.469 255.982 442.204C249.548 475.681 242.756 511.056 231.142 543.443C226.149 557.367 221.999 569.166 209.899 577.521C202.218 582.824 191.097 580.729 182.349 580.729C178.975 580.729 173.212 581.788 170.012 580.232C161.665 576.171 160.761 555.688 159.501 548.422C155.676 526.378 154.359 503.283 147.772 481.814C147.007 479.319 144.88 476.013 146.555 473.682C153.212 464.42 163.702 456.738 172.28 449.617C203.74 423.499 236.271 398.704 267.71 372.553C316.312 332.128 363.599 289.604 405.461 242.16'
                                    stroke='black'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                />
                            </motion.svg>
                        </div>
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: '10px' }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                                ease: 'easeInOut',
                            }}
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            width={50}
                            height={50}
                        >
                            <path
                                d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
                                stroke='#000000'
                                strokeWidth='1'
                            ></path>
                            <path
                                d='M12 6V14'
                                stroke='#000000'
                                strokeWidth='1'
                            ></path>
                            <path
                                d='M15 11L12 14L9 11'
                                stroke='#000000'
                                strokeWidth='1'
                            ></path>
                        </motion.svg>
                    </div>
                    {/* Skills */}
                    <div
                        className='flex flex-col gap-12 justify-center'
                        ref={skillRef}
                    >
                        <motion.h1
                            initial={{ x: '-300px' }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className='font-bold text-2xl'
                        >
                            SKILLS
                        </motion.h1>
                        {/* Skill list */}
                        <motion.div
                            initial={{ x: '-300px' }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            className='flex gap-4 flex-wrap'
                        >
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                JavaScript
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                TypeScript
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                React.js
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Next.js
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                SCSS
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Tailwind CSS
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                MongoDB
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                PostgreSQL
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Node.js
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Nest.js
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Express.js
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Spring Boot
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                GraphQL
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Apollo
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Redux
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Framer Motion
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Three.js
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                WebGL
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Webpack
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Vite
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Docker
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                AWS
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Firebase
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Git
                            </div>
                            <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Figma
                            </div>
                        </motion.div>
                        {/* SKILL SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: '10px' }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                                ease: 'easeInOut',
                            }}
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            width={50}
                            height={50}
                        >
                            <path
                                d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
                                stroke='#000000'
                                strokeWidth='1'
                            ></path>
                            <path
                                d='M12 6V14'
                                stroke='#000000'
                                strokeWidth='1'
                            ></path>
                            <path
                                d='M15 11L12 14L9 11'
                                stroke='#000000'
                                strokeWidth='1'
                            ></path>
                        </motion.svg>
                    </div>
                    {/* Experiences */}
                    <div
                        className='flex flex-col gap-12 justify-center pb-48'
                        ref={experienceRef}
                    >
                        <motion.h1
                            initial={{ x: '-300px' }}
                            animate={isExperienceRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className='font-bold text-2xl '
                        >
                            EXPERIENCES
                        </motion.h1>
                        {/* EXPERINCE LIST */}
                        <motion.div
                            initial={{ x: '-300px' }}
                            animate={isExperienceRefInView ? { x: 0 } : {}}
                            className=''
                        >
                            {/* LIST ITEM */}
                            <div className='flex justify-between h-48'>
                                {/* LEFT */}
                                <div className='w-1/3'>
                                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                                        Sofware Developer
                                    </div>
                                    <div className='p-3 text-sm italic'>
                                        Working on Front-End and Fullstack
                                        Projects.
                                    </div>
                                    <div className='p-3 text-red-400 text-sm font-semibold'>
                                        2024 - Present
                                    </div>
                                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                                        Emit Knowledge
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className='w-1/6 flex justify-center '>
                                    <div className='w-1 h-full bg-gray-600 reunded relative'>
                                        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className='w-1/3'></div>
                            </div>
                            {/* LIST ITEM */}
                            <div className='flex justify-between h-48'>
                                {/* LEFT */}
                                <div className='w-1/3'></div>
                                {/* CENTER */}
                                <div className='w-1/6 flex justify-center'>
                                    <div className='w-1 h-full bg-gray-600 reunded relative'>
                                        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className='w-1/3'>
                                    {' '}
                                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                                        Sofware Developer
                                    </div>
                                    <div className='p-3 text-sm italic'>
                                        Working on Front-End and Fullstack
                                        Projects.
                                    </div>
                                    <div className='p-3 text-red-400 text-sm font-semibold'>
                                        2024 - Present
                                    </div>
                                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                                        Emit Knowledge
                                    </div>
                                </div>
                            </div>
                            {/* LIST ITEM */}
                            <div className='flex justify-between h-48'>
                                {/* LEFT */}
                                <div className='w-1/3'>
                                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                                        Sofware Developer
                                    </div>
                                    <div className='p-3 text-sm italic'>
                                        Working on Front-End and Fullstack
                                        Projects.
                                    </div>
                                    <div className='p-3 text-red-400 text-sm font-semibold'>
                                        2024 - Present
                                    </div>
                                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                                        Emit Knowledge
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className='w-1/6 flex justify-center'>
                                    <div className='w-1 h-full bg-gray-600 reunded relative'>
                                        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className='w-1/3'></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* SVG CONTAINER */}
                <div className='hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30'>
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div>
    )
}

export default AboutPage
