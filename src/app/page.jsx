'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Homepage = () => {
    return (
        <motion.div
            className='h-full'
            initial={{ y: '-200vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className='flex flex-col lg:flex-row h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
                {/* IMAGE CONTAINER */}
                <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
                    <Image
                        src='/hero.png'
                        alt='Profile Picture'
                        width={200}
                        height={200}
                        className="rounded-full border-4 border-black shadow-lg"
                    />
                </div>
                {/* TEXT CONTAINER */}
                <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center'>
                    {/* TITLE */}
                    <h1 className='text-4xl md:text-6xl font-bold'>
                        Crafting Digital Experiences, Designing Future.
                    </h1>
                    {/* DESC */}
                    <p className='md:text-xl'>
                        Welcome to my digital canvas, where innovation and
                        creativity come together. My portfolio reflects my
                        devotion to perfection, demonstrating a sharp eye for
                        aesthetics and knowledge of coding.
                    </p>
                    {/* BUTTONS */}
                    <div className='flex gap-4 w-full'>
                        <button className='p-4 rounded-lg ring-1 ring-black bg-black text-white'>
                            View My Work
                        </button>
                        <button className='p-4 rounded-lg ring-1 ring-black'>
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Homepage
