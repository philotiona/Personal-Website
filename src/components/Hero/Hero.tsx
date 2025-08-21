import {type ReactNode } from "react";

export default function Hero(): ReactNode {
    return(
        <main className="h-screen w-full flex flex-col lg:flex-row gap-4 lg:gap-8 p-4 flex-wrap box-border">
            <section className="w-full flex justify-center items-center box-border">
                <div className="grid grid-cols-[1fr_auto_1fr] grid-rows-[1fr_auto_1fr] aspect-square place-items-center relative max-w-[90%] sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl gap-2">
                    <div className="grid col-start-2 row-start-1 place-items-center">
                        <span className="text-sm sm:text-base lg:text-lg">about</span>
                    </div>
                    <div className="grid col-start-1 row-start-2 place-items-center">
                        <span className="text-sm sm:text-base lg:text-lg">skills</span>
                    </div>
                    <div className="col-start-2 row-start-2 flex flex-row items-center justify-center w-full h-full rounded-full aspect-square relative">
                        <div className="flex flex-row items-center justify-center rounded-full aspect-square relative p-6 sm:p-8 lg:p-10 xl:p-12 box-border w-full h-full">
                            <div className="flex justify-center items-center w-fit">
                                <p className="text-xl sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl flex items-center whitespace-nowrap font-medium invisible">lzhas Kelgenbay</p>
                                <img 
                                    className="w-8 h-8 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-14 xl:h-14 flex items-center rounded-full shadow-[0_22px_70px_4px_rgba(255,255,255,0.56)]" 
                                    src="moon2.svg" 
                                    alt="Profile icon"
                                />
                                <p className="text-xl sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl flex items-center whitespace-nowrap font-medium">lzhas Kelgenbay</p>
                            </div>
                            <div className="border-[0.2px] border-[var(--color-whitish)] aspect-square rounded-full w-full h-full absolute top-0 left-0 shadow-[inset_0_30px_60px_-12px_rgba(255,255,255,0.25),_inset_0_18px_36px_-18px_rgba(255,255,255,0.3)] box-border"></div>
                        </div>
                    </div>
                    <div className="grid col-start-3 row-start-2 place-items-center">
                        <span className="text-sm sm:text-base lg:text-lg">works</span>
                    </div>
                    <div className="grid col-start-2 row-start-3 place-items-center">
                        <span className="text-sm sm:text-base lg:text-lg">contact</span>
                    </div>
                </div>
            </section>
            <section className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-4">
                <div className="text-center lg:text-left">
                    <span className="text-base sm:text-lg lg:text-xl">frontend developer</span>
                </div>
                <div>
                </div>
            </section>
        </main>
    )
}