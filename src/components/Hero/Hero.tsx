import {type ReactNode } from "react";

export default function Hero(): ReactNode {
    return(
        <main className="h-screen w-full flex gap-8">
            <section className="w-full flex flex-row justify-center items-center">
                <div className="grid grid-cols-[1fr_auto_1fr] grid-rows-[1fr_auto_1fr] aspect-square place-items-center relative">
                    <div className="grid col-start-2 row-start-1 place-items-center">
                        About
                    </div>
                    <div className="grid col-start-1 row-start-2 place-items-center">
                        Hello
                    </div>
                    <div className="col-start-2 row-start-2 flex flex-row items-center justify-end w-fit h-fit rounded-full aspect-square">
                        <div className="flex flex-row items-center justify-end w-fit h-fit rounded-full aspect-square">
                            <div className="flex flex-row invisible">
                                <img className="w-12 h-12 flex justify-center items-center " src="moon2.svg" alt="" />
                                <p className="h-12 text-4xl flex justify-center items-end text-">lzhas Kelgenbay</p>
                            </div>
                            <div className="border-[0.2px] border-[var(--color-whitish)] rounded-full w-full h-full absolute"></div>
                            <img className="w-12 h-12 flex justify-center items-center " src="moon2.svg" alt="" />
                            <p className="h-12 text-4xl flex justify-center items-end text-">lzhas Kelgenbay</p>
                        </div>
                    </div>
                    <div className="grid col-start-3 row-start-2 place-items-center">
                        Hello
                    </div>
                    <div className="grid col-start-2 row-start-3 place-items-center">
                        Hello
                    </div>
                </div>
            </section>
            <section className="flex flex-row justify-center items-center">
                <div>
                    frontend developer  
                </div>
                <div>
                    
                </div>
            </section>
        </main>
    )
}