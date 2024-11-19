"use client"
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils'

const options = [
    {
        title: "해외 마케팅",
        icon: "/assets/images/icons/icon-marketing.png",
    },
    {
        title: "퍼블리셔",
        icon: "/assets/images/icons/icon-image.png",
    },
    {
        title: "캐드원(제도사)",
        icon: "/assets/images/icons/icon-box.png",
    },
    {
        title: "해외 세일즈",
        icon: "/assets/images/icons/icon-target.png",
    },
    {
        title: "해외 CS",
        icon: "/assets/images/icons/icon-call.png",
    },
    {
        title: "해외 마케팅",
        icon: "/assets/images/icons/icon-marketing.png",
    },
]

export default function OptionSlider() {
    const [screenWidth, setScreenWidth] = useState(0);
    
    useEffect(() => {
        const updateWidth = () => {
            setScreenWidth(window.innerWidth);
        };
        
        // Set initial width
        updateWidth();
        
        // Add event listener
        window.addEventListener('resize', updateWidth);
        
        // Cleanup
        return () => window.removeEventListener('resize', updateWidth);
    }, []);




  return (
      <div className="hidden lg:block animate-in fade-in-0 slide-in-from-bottom-3 duration-500" style={{ marginLeft: screenWidth > 1536 ? `${(screenWidth-1536)/2}px` : screenWidth > 1280 ? `${(screenWidth-1280)/2}px` : '16px' }}>
                <Swiper
                    slidesPerView={4.5}
                    spaceBetween={10}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        }}
                    loop={true}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    >
                    {options.map((option, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex items-center bg-white/20 rounded-md p-4 gap-6 '>
                                <div className='bg-white/40 p-3 rounded-md'>
                                    <Image src={option.icon} alt="option" width={32} height={32} />
                                </div>
                            <h6 className='text-white text-lg font-black'>{option.title}</h6>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
  )
}
