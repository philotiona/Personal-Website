import {type ReactNode } from "react";
import Header from "../Header/Header";

export default function Hero(): ReactNode {
    return(
        <main className="h-screen w-full flex flex-col flex-wrap box-border">
            <Header/>
            <section className="w-full h-auto flex justify-center items-start box-border">
                <div className="grid grid-cols-[1fr_auto_1fr] grid-rows-[1fr_auto_1fr] aspect-square place-items-center w-fit">
                    <div className="grid col-start-2 row-start-1 place-items-center w-full h-full items-end justify-center">
                        <span className="text-sm sm:text-base lg:text-lg w-full text-end border-t-1 mb-1 p-1">about</span>
                    </div>
                    <div className="grid col-start-1 row-start-2 place-items-center">
                        <span className="text-sm sm:text-base lg:text-lg border-l-1 mr-1 p-1">skills</span>
                    </div>
                    <div className="col-start-2 row-start-2 flex flex-row items-center justify-center w-full h-full rounded-full aspect-square relative">
                        <div className="flex flex-row items-center justify-center rounded-full aspect-square relative p-10 w-full h-full border-[0.2px] border-[var(--color-whitish)] top-0 left-0 shadow-[inset_0_30px_60px_-12px_rgba(255,255,255,0.25),_inset_0_18px_36px_-18px_rgba(255,255,255,0.3)] box-border">
                                <p className="text-xl sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl flex items-center whitespace-nowrap font-bold invisible">afrontend</p>
                                <img 
                                    className="fixed w-8 h-8 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-14 xl:h-14 flex items-center rounded-full shadow-[0_22px_70px_4px_rgba(255,255,255,0.56)]" 
                                    src="moon2.svg" 
                                    alt="Profile icon"
                                />
                                <p className="text-xl sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl flex items-center whitespace-nowrap font-bold invisible">developer</p>
                            {/*<div className="border-[0.2px] border-[var(--color-whitish)] aspect-square rounded-full w-full h-full absolute top-0 left-0 shadow-[inset_0_30px_60px_-12px_rgba(255,255,255,0.25),_inset_0_18px_36px_-18px_rgba(255,255,255,0.3)] box-border"></div>*/}
                        </div>
                    </div>
                    <div className="grid col-start-3 row-start-2 place-items-center">
                        <span className="text-sm sm:text-base lg:text-lg border-r-2 ml-1 p-1">works</span>
                    </div>
                    <div className="grid col-start-2 row-start-3 place-items-center w-full h-full items-start justify-center">
                        <span className="text-sm sm:text-base lg:text-lg border-b-1 mt-1 p-1 text-start">contact</span>
                    </div>
                </div>
            </section>
        </main>
    )
}