"use client";

import Image from "next/image";
import SliderData from '../../json/sliderData.json'
import { useState } from "react";
import { clearTimeout } from "timers";
import Link from "next/link";
export default function Home() {
    const nextStyle = `
    [&>*:nth-child(1)>:nth-child(1)]:z-[1]
        /* 🟩 h1 tag */
        [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)]:translate-y-[50px] [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)]:opacity-0 [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)]:blur-[20px] [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)]:animate-showContent
        
        /* 🟩 p tag */
        [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(2)]:translate-y-[50px] [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(2)]:blur-[20px] [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(2)]:opacity-0 [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(2)]:animate-showContent
        
        /* 🟩 button tag */
        [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(3)]:translate-y-[50px] [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(3)]:blur-[20px] [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(3)]:opacity-0 [&>*:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(3)]:animate-showContent
        
        /* 🟩 Image tag */
        [&>*:nth-child(1)>:nth-child(1)>:nth-child(1)]:absolute [&>*:nth-child(1)>:nth-child(1)>:nth-child(1)]:w-[208px] [&>*:nth-child(1)>:nth-child(1)>:nth-child(1)]:h-[128px] [&>*:nth-child(1)>:nth-child(1)>:nth-child(1)]:left-[1000px] [&>*:nth-child(1)>:nth-child(1)>:nth-child(1)]:rounded-md [&>*:nth-child(1)>:nth-child(1)>:nth-child(1)]:bottom-[197px] [&>*:nth-child(1)>:nth-child(1)>:nth-child(1)]:animate-showImage
        
        /* 🟩 Thumbnail Next*/
        [&>*:nth-last-child(1)>:nth-child(1)>:nth-last-child(1)]:w-0 [&>*:nth-last-child(1)>:nth-child(1)>:nth-last-child(1)]:overflow-hidden [&>*:nth-last-child(1)>:nth-child(1)>:nth-last-child(1)]:animate-showThumbnail
    `
    const prevStyle = `
    [&>*:nth-child(1)>:nth-child(1)]:z-[2]
    
    [&>*:nth-child(1)>:nth-child(1)>:nth-child(1)]:absolute [&>*:nth-child(1)>:nth-child(1)>:nth-child(1)]:bottom-0 [&>*:nth-child(1)>:nth-child(1)>:nth-child(1)]:left-0 [&>*:nth-child(1)>:nth-child(1)>:nth-child(1)]:animate-outImage
    
    [&>*:nth-last-child(1)>:nth-child(1)>:nth-child(1)]:w-0 [&>*:nth-last-child(1)>:nth-child(1)>:nth-child(1)]:overflow-hidden [&>*:nth-last-child(1)>:nth-child(1)>:nth-child(1)]:opacity-0 [&>*:nth-last-child(1)>:nth-child(1)>:nth-child(1)]:animate-showThumbnail
    `
    const [isClick,setClick] = useState(true)
    const [isNext,setNext] = useState(true)
    const [isBar,setBar] = useState(false)

    const [isClickPrev,setClickPrev] = useState(true)
    const [isPrev,setPrev] = useState(true)
    function nextBtn() {
            isClick && showSlider("next")
            isClick && setClick(false)
            setBar(true)
            setNext(true)
            let runTime = 3000
            let runOut
            if(isClick){
                clearTimeout(runOut);
                runOut = setTimeout(()=>{
                    setClick(true)
                    setBar(false)
                },runTime)
            }
            console.log(isClick)
            /* showSlider("next"); */
            }
    function prevBtn(){
        isClickPrev && showSlider('prev')
        isClickPrev && setClickPrev(false)
        setBar(true)
        setPrev(true)
        console.log(isClickPrev)
        console.log('clicked')
        let runTime = 3000
        let runOut
        if(isClickPrev){
            clearTimeout(runOut);
            runOut = setTimeout(()=>{
                setClickPrev(true)
                setBar(false)
            },runTime)
            }
        }
    function showSlider(type: any) {
    let slideItems = document.querySelectorAll("#item");
    let thumpnailItems = document.querySelectorAll("#thumpnailItem");
    let thumpnailList = document.querySelector("#thumpnailList");
    let numList = document.querySelector("#numList")
    let nums = document.querySelectorAll('#numList h1')
    let list = document.querySelector("#list");
    let next = document.querySelector('.next')

    if (type === "next") {
        list?.appendChild(slideItems[0]);
        thumpnailList?.appendChild(thumpnailItems[0]);
        numList?.appendChild(nums[0])
        console.log(next)
    }
    }
    return (
    /* Container */

    <div
        className={`h-[120vh] w-full skew-y-[-3deg] flex relative
        ${isPrev ? prevStyle : ''}
        ${isNext ? nextStyle : ''}
        
        `}
    >
        
      {/* SLIDER */}
        <div id="list" className="h-full w-full">

        {
        SliderData.map(item =>{
        return (
        <div id="item" key={item.id} className="w-full h-full absolute item-2">
        <Image src={item.image} alt="..." width={1000} height={1000} className='w-full h-full skew-y-[0deg] brightness-50 object-cover' ></Image>
          {/* Content -- 1 */}
            <div className="absolute top-1/4 left-20 w-2/4 flex flex-col gap-5">
            <h1
                className=" text-[#F6F6F6] text-5xl font-semibold w-fit"
                style={{ animationDelay: "1.2s" }}
            >
                {item.heading}
            </h1>
            <p
                className="text-[#F6F6F6] font-thin text-sm0 w-fit antialiased leading-7 "
                style={{ animationDelay: "1.4s" }}
            >
                {item.paragraph}
            </p>
            <button
                className="bg-[#F6F6F6] border-0 outline-none relative rounded-full text-lg h-11 overflow-hidden w-32 before:content[''] before:w-0 before:h-full before:ease-out before:bg-[#008DDA] before:z-0 before:absolute before:inset-0 before:rounded-full hover:before:w-full before:duration-500 before:transition-[width,left] hover:text-[#F6F6F6]"
                style={{ animationDelay: "1.6s" }}
            >
                <Link href={item.link} className="absolute left-[50%] w-full top-[50%] translate-x-[-50%] translate-y-[-50%]">
                {item.text}
                </Link>
            </button>
            </div>
        </div>
        )
        })
        }

        </div>

        <div className="z-10 absolute xl:bottom-[150px] lg:bottom-[130px] xl:right-[380px] lg:right-[340px]">
        <button
            id="nextBtn"
            onClick={()=> {nextBtn()}}
            className="mr-6 p-2 bg-black/30 rounded-full hover:bg-black/40"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-8 h-8"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
            </svg>
        </button>
        </div>
        <div className="absolute top-[35%] z-10 right-[4%] text-3xl font-thin" >
        <div id="numList" className="relative
                                    [&>*:nth-child(2)]:relative [&>*:nth-child(2)]:bottom-[-24px] [&>*:nth-child(2)]:left-[5px] [&>*:nth-child(2)]:opacity-0 [&>*:nth-child(2)]:animate-numTranslate [&>*:nth-child(2)]:text-base [&>*:nth-child(2)]:text-black/45  [&>*:nth-child(2)]:font-bold
                                    [&>*:nth-child(1)]:text-[#F6F6F6] [&>*:nth-child(1)]:left-0 [&>*:nth-child(1)]:bottom-[-24px] [&>*:nth-child(1)]:text-[22px] [&>*:nth-child(1)]:relative [&>*:nth-child(1)]:opacity-0 [&>*:nth-child(1)]:animate-numBlackTranslate
                                        [&>*:nth-child(3)]:text-black/20 [&>*:nth-child(3)]:bottom-[-24px] [&>*:nth-child(3)]:text-[17px] [&>*:nth-child(3)]:relative [&>*:nth-child(3)]:opacity-0 [&>*:nth-child(3)]:animate-numBlackTranslate" >
            <h1 className=" tracking-widest" >03</h1>
            <h1 className=" tracking-widest" >01</h1>
            <h1 className=" tracking-widest" >02</h1>
        </div>
        <div className="absolute w-10 rounded-full h-[2.5px] top-1/2 left-8 bg-[#F6F6F6]/70" ></div>
        </div>
        <div className={`absolute left-0 h-1 w-0 bg-white translate-y-[103px] z-50 ${isBar && 'w-full animate-timeRunning'} `} ></div>
      {/* Thumbnail */}
        <div className={`top-[65%] lg:top-[60%] xl:right-1 lg:-right-10 absolute flex flex-col gap-5`}>
        <div
            id="thumpnailList"
            className={`w-fit h-fit flex gap-7 z-10 /* same goes here also 👉*/ ${isNext && 'translate-x-[150px] animate-transformThumbnail'}`}
        >
            {
                SliderData.map(item => {
                    return(
                        <div id="thumpnailItem" key={item.id} className=" h-32 w-52">
                        <Image id='thumpnailItem' src={item.image} width={1000} height={1000} alt='...' className=' brightness-75 rounded-md h-full w-full object-cover shadow-2xl' ></Image>
                        </div>
                    )
                })
            }
        </div>
        </div>
    </div>
    );
}
