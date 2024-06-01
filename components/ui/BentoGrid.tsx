'use client'

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from './GradientBg';
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from '@/data/confetti.json'
import MagicButton from './MagicButton';
import { FaCheck, FaCopy, FaUser } from "react-icons/fa6";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("ryokhrisnaf@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
                className
            )}
            style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            <div className={`${id === 6 && 'flex justify-center'} h-full`}>
                <div className="w-full h-full absolute">
                    {
                        img && <img
                            src={img}
                            alt={`bento-${id}`}
                            className={cn(imgClassName, 'object-cover, object-center')}
                        />
                    }
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                    {spareImg && <img
                        src={spareImg}
                        alt={`bento-${id}`}
                        className={'object-cover object-center w-full h-full'}
                    />}
                </div>
                {
                    id === 6 && (
                        <BackgroundGradientAnimation>

                        </BackgroundGradientAnimation>
                    )
                }

                <div className={cn(titleClassName, 'group/hover/ bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
                    {
                        id === 1 && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:w-3/4">
                                <div className="mb-4 m-auto bg-slate-100 w-40 h-40 aspect-square rounded-full overflow-hidden col-span-1">
                                    <img className="w-full h-full object-cover aspect-square col-span-1" src="/foto.JPG" alt="" />
                                </div>
                                <div className="h-full flex flex-col gap-2 justify-center mb-4 lg:mb-0">
                                    <div className="flex gap-2">
                                        {/* <div className=""><FaUser></FaUser></div> */}
                                        <div className="text-xl font-medium">Ryo Khrisna Fitriawan</div>
                                    </div>
                                    <div className="flex gap-2">
                                        {/* <div className=""><FaUser></FaUser></div> */}
                                        <div className="text-sm text-slate-500">Semarang, Indonesia</div>
                                    </div>
                                    <div className="flex gap-2">
                                        {/* <div className=""><FaUser></FaUser></div> */}
                                        <div className="text-sm text-slate-500">Universitas Dian Nuswantoro</div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <div className="font-sans font-extralight text-[#c1c2d3] text-xs lg:text-base z-10">
                        {description}
                    </div>
                    <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                        {title}
                    </div>



                    {
                        id === 2 && <GlobeDemo></GlobeDemo>
                    }

                    {
                        id === 3 && (
                            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                                <div className="flex flex-col gap-3 lg:gap-8">
                                    {
                                        ["Laravel", "ReactJS", "NextJS"].map((i) => (
                                            <span
                                                key={i}
                                                className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                                            >{i}</span>
                                        ))
                                    }
                                    <span className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"></span>
                                </div>
                                <div className="flex flex-col gap-3 lg:gap-8  pr-2">
                                    <span className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"></span>
                                    {
                                        ["ExpressJS", "NestJS", "Flutter"].map((i) => (
                                            <span
                                                key={i}
                                                className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                                            >{i}</span>
                                        ))
                                    }

                                </div>
                            </div>
                        )
                    }

                    {
                        id === 6 && (
                            <div className="mt-5 relative">
                                <div className={`absolute -bottom-5 right-0`}>
                                    <Lottie
                                        options={{
                                            loop: copied,
                                            autoplay: copied,
                                            animationData,
                                            rendererSettings: {
                                                preserveAspectRatio: "xMidYMid slice",
                                            },
                                        }}
                                    ></Lottie>
                                </div>

                                <MagicButton
                                    title={copied ? "Copied!" : "Copy code"}
                                    icon={copied ? <FaCheck /> : <FaCopy />}
                                    position="left"
                                    handleClick={handleCopy}
                                ></MagicButton>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};
