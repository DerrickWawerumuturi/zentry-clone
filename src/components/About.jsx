import React from 'react'
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import  {ScrollTrigger} from "gsap/all";
import AnimatedTitle from "./AnimatedTitle.jsx";

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })

        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height:"100vh",
            borderRadius: 0
        })
    })

    return (
        <div id="about" className={"min-h-screen w-screen"}>
            <div className={"relative mb-8 mt-36 flex flex-col gap-5 items-center"}>
                <h2 className={"font-general text-sm uppercase md:text-[10px]"}>
                    Welcome to Zentry
                </h2>

                <AnimatedTitle title={"Dis<b>c</b>over the world's <br/> <b>l</b>argest shared adventure"} containerClass={"mt-5 !text-black text-center"}/>
                <div className={"about-subtext"}>
                    <p>The Game begins-your life, now an epic MMORPG</p>
                    <p>Zentry unites players for countless games and platforms</p>
                </div>
            </div>
            <div className={"h-dvh w-screen"} id={"clip"}>
                <div className={"mask-clip-path about-image"}>
                    <img
                    src={"/img/about.webp"}
                    alt={"background"}
                    className={"absolute left-0 top-0 size-full object-cover"}
                    />
                </div>

            </div>
        </div>
    )
}
export default About
