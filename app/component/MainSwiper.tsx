"use client"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';


export default function MainSwiper({candidates}: {candidates: any[]}) {
    return (
        <div className="w-full items-center relative animate-in fade-in-0 slide-in-from-bottom-3 duration-500">
            <div className='w-full items-center justify-center px-10 '>
                <div className="flex justify-center w-full ">
                    <div className="z-10 inline-block bg-white px-4 py-1.5 rounded-md mb-6 relative animate-in fade-in-0 slide-in-from-bottom-3 duration-500" >
                        <div className="flex items-center gap-2 text-lg text-[#00C696] ">
                            <Image src="/assets/images/icons/money.png" alt="money" width={26} height={26} />
                            <p>월 100만원</p>
                        </div>
                        <div className="absolute left-1/2 -bottom-2">
                            <svg className="text-white" width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.43301 10.25C6.24056 10.5833 5.75944 10.5833 5.56699 10.25L0.370835 1.25C0.178386 0.916665 0.418948 0.499999 0.803848 0.499999L11.1962 0.5C11.5811 0.5 11.8216 0.916667 11.6292 1.25L6.43301 10.25Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                </div>
            <Swiper
                effect={'coverflow'}
                loop={true}
                centeredSlides={true}
                slidesPerView={2}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 60,
                    modifier: 10,
                }}
                autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                navigation={{
                    enabled: true,
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[EffectCoverflow, Navigation, Autoplay]}>
               {candidates.map((candidate: any, index: number) => (
                <SwiperSlide key={index} className='rounded-md'>
                   <div className=" bg-white flex flex-col rounded-md justify-center items-center p-9 ">
                        <div className="size-[120px] overflow-hidden">
                            <Image src={candidate.image} alt="Background" width={120} height={120} />
                        </div>
                        <div className='py-4 text-center'>
                           <h6 className='text-[#24252F] text-2xl font-bold whitespace-nowrap'>{candidate.name}</h6> 
                           <p className='text-[#4A77FF] font-black'>{candidate.profession}{candidate.experience}</p>
                        </div>
                        <div className='flex flex-wrap space-y-0.5 justify-center'>
                            {candidate.skills.map((skill: string, index: number) => (
                                <div key={index} className='border border-[#C1C5CF] rounded-md px-3 py-1 mx-[0.5px]'>
                                    <p className='whitespace-nowrap text-[#5E626F] text-base font-black'>{skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </SwiperSlide>
                
               ))}
            </Swiper>
            </div>
               <div className="flex items-center justify-between absolute top-1/2 w-full z-10">
                    <div className="swiper-button-next cursor-pointer text-white "><ChevronLeft/></div>
                    <div className="swiper-button-prev cursor-pointer text-white"><ChevronRight/></div>
               </div>
        </div>
    );
}