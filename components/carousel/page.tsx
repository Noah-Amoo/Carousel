'use client'

import { ChevronLeft, ChevronRight, Opacity } from '@material-ui/icons'
import React, { ReactNode, useCallback, useEffect, useState } from 'react'

interface CarouselProps {
    children: ReactNode; // Explicitly type the children prop
    slideLength: number;
    autoSlide: boolean;
    autoSlideInterval: number;
}

export default function Carousel({children, slideLength, autoSlide, autoSlideInterval} : CarouselProps) {
    const [curr, setCurr] = useState(0)

    const prev = () => setCurr(curr => curr === 0 ? slideLength - 1 : curr - 1)
    const next = useCallback(() => setCurr(curr => curr === slideLength - 1 ? 0 : curr + 1),[slideLength])

    const childrenArray = React.Children.toArray(children)

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [autoSlide, autoSlideInterval, next])

  return (
    <div className='overflow-hidden relative'>
        <div className='flex transition-transform ease-out duration-500' style={{transform: `translateX(-${curr * 100}%)`}}>
            {children}
        </div>

        <div className='absolute inset-0 flex items-center justify-between p-4'>
            <button className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' onClick={prev}>
                <ChevronLeft style={{fontSize: 40}} />
            </button>
            <button className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' onClick={next}>
                <ChevronRight style={{fontSize: 40}} />
            </button>
        </div>

        <div className='absolute bottom-4 right-0 left-0'>
            <div className='flex items-center justify-center gap-2'>
                {childrenArray.map((_, i) => (
                    <div key={i} className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}`}>
                        
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
