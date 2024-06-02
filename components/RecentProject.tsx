import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin';

const RecentProject = () => {
    return (
        <div className='py-20'>
            <h1 className='heading'>
                A small selection of {''} Recent Project
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-0 md:gap-y-8 mt-10">
                {
                    projects.map((project) => (
                        <div key={project.id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
                            <PinContainer
                                title={project.link}
                                href={project.link}
                            >
                                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[35vh] h-[20vh] mb-10">
                                    <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                        <img src="bg.png" alt={project.title} />
                                    </div>
                                    <img src={project.img} alt={project.title} className='absolute z-10 bottom-0' />
                                </div>
                                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{project.title}</h1>
                                <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>{project.des}</p>
                                <div className="flex items-center justify-between mt-7 mb-3">
                                    <div className="flex items-center">
                                        {
                                            project.iconLists.map((icon, index) => (
                                                <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                                    style={{ transform: `translateX(-${index * 10}px)` }}>
                                                    <img src={icon} alt={project.title} className='p-2' />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecentProject