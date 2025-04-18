"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"
import Image from "next/image"

/* Image */
import CatOne from "../../../public/images/DummyImage/cat.jpeg"

import Data from "../../json/memberData.json"

const Member = ()=>{
    const memberRef = useRef(null)
    
    useGSAP(()=>{
        // Create a timeline for the background elements
        const bgTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#memberContainer",
                start: "top 80%",
                end: "bottom top",
                markers: false,
                toggleActions: "play none none reverse",
                fastScrollEnd: true,
                preventOverlaps: true
            }
        });

        // Animate the background elements
        bgTl.to("#left", {
            transform: "translateY(0)",
            duration: 1.5
        })
        .to("#center", {
            left: "50%",
            top: "50%",
            transform: "translateY(-50%) translateX(-50%)",
            duration: 1
        }, "<")
        .to("#right", {
            transform: "translateY(0)",
            duration: 1.5
        }, "<");

        // Create a separate timeline for the cards that starts after the background
        const cardTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#memberContainer",
                start: "top 80%",
                end: "bottom top",
                markers: false,
                toggleActions: "play none none reverse",
                fastScrollEnd: true,
                preventOverlaps: true
            }
        });

        // Animate the cards with a delay to ensure they appear after the background
        cardTl.to("#cardContainer > div", {
            scale: 1,
            duration: 0.5,
            stagger: 0.2,
            delay: 2.5 // Delay to ensure background animation completes first
        });
    },{scope: memberRef})

    return (
        <div className="w-full h-fit" ref={memberRef} >
        <div id="memberContainer" className="w-full h-fit relative">
            <div id="left" className="absolute max-sm:hidden z-20 left-0 top-0 translate-y-[-170vw] bg-[#008DDA] h-full w-[33.33%]" ></div>
            <div id="center" className="absolute z-20 left-1/2 bottom-0 max-sm:translate-y-0 max-sm:-translate-x-0 max-sm:-left-0 max-sm:w-full max-sm:right-0 translate-y-[170vw] -translate-x-1/2 bg-[#008DDA] h-full w-[34%]" ></div>
            <div id="right" className="absolute max-sm:hidden z-20 right-0 top-0 translate-y-[-170vw] bg-[#008DDA] h-full w-[33.33%]" ></div>
            <div id="cardContainer" className="relative p-4  sm:p-7 pb-16 sm:pb-28 gap-y-8 sm:gap-y-16 gap-x-4 sm:gap-x-7 left-0 grid place-items-center xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 z-20 w-full max-md:skew-y-0 -skew-y-3 h-fit" >
            {
                Data.map(item => {
                    return(
                        <div id={`${item.gsap.name}`} key={item.id} className="max-sm:scale-1 w-full max-w-md mx-auto max-2xl:scale-0 max-xl:scale-0 max-lg:scale-0" >
                            <div className="relative left-1/2 -translate-x-1/2 top-0 translate-y-8 sm:translate-y-11 z-10 h-32 w-32 sm:h-40 sm:w-40 lg:h-32 lg:w-32 rounded-full object-cover overflow-hidden border-4 border-[#F6F6F6]" >
                                <Image src={item.source} width={2000} height={2000} className="h-full w-full object-cover object-center" alt="..." ></Image>
                            </div>
                            <div className="relative w-full px-4 pb-4 flex flex-col max-sm:h-fit max-sm:pt-12 justify-between pt-[80px] sm:pt-[100px] lg:pt-[50px] items-center rounded-lg translate-x-0 h-[500px] sm:h-[600px] bg-[#F6F6F6] shadow-2xl" >
                            
                            <h1 className="text-xl sm:text-2xl font-bold text-[#1E1E1E] mb-3 sm:mb-5" >{item.memberName}</h1>
                            <p className="w-full text-xs sm:text-sm leading-4 sm:leading-5 text-justify font-medium" >
                            {item.paragraph}
                            </p>
                            <div className="flex max-sm:hidden flex-col w-full text-xs sm:text-sm mt-3 sm:mt-5 tracking-widest lg:font-medium font-bold h-fit gap-1 sm:gap-2">
                                <div className="flex flex-col items-center justify-between gap-1" >
                                    <h3>Frontend</h3>
                                    <div className="relative h-2 sm:h-3 w-full rounded-full bg-gray-400" >
                                        <div style={{width: `${item.frontendPercentage}%`}} className={` rounded-full h-full absolute left-0 top-0 bg-gradient-to-r to-[#008DDA] from-blue-700`} ></div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-between gap-1" >
                                    <h3>Backend</h3>
                                    <div className="relative h-2 sm:h-3 w-full rounded-full bg-gray-400" >
                                        <div style={{width: `${item.backendPercentage}%`}} className={` rounded-full h-full absolute left-0 top-0 bg-gradient-to-r to-[#008DDA] from-blue-700`} ></div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-between gap-1" >
                                    <h3>UI/UX Design</h3>
                                    <div className="relative h-2 sm:h-3 w-full rounded-full bg-gray-400" >
                                        <div style={{width: `${item.uiuxdesingPercentage}%`}} className={`rounded-full h-full absolute left-0 top-0 bg-gradient-to-r to-[#008DDA] from-blue-700`} ></div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-between gap-1" >
                                    <h3>Data Collector</h3>
                                    <div className="relative h-2 sm:h-3 w-full rounded-full bg-gray-400" >
                                        <div style={{width: `${item.fieldResearchPercentage}%`}} className={`rounded-full h-full absolute left-0 top-0 bg-gradient-to-r to-[#008DDA] from-blue-700`} ></div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-between gap-1" >
                                    <h3>Website Presenter</h3>
                                    <div className="relative h-2 sm:h-3 w-full rounded-full bg-gray-400" >
                                        <div style={{width: `${item.websitePresenterPercentage}%`}} className={` rounded-full h-full absolute left-0 top-0 bg-gradient-to-r to-[#008DDA] from-blue-700`} ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                    )
                })
            }

            </div>
            <h1 className="absolute max-sm:hidden h-fit text-[100px] sm:text-[150px] md:text-[200px] top-0 z-10 font-extrabold drop-shadow-xl w-full text-center text-gray-200 max-md:skew-y-0 -skew-y-3" >TEAM MEMBERS</h1>
            </div>
        </div>
    )
}

export default Member