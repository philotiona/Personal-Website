import type { ReactNode } from "react";

export default function Hero(): ReactNode {
    return(
        <main className="h-screen w-full">
            <section className="w-full flex flex-row justify-center items-center">
                <img className="w-16 h-16 flex justify-center items-center " src="moon.svg" alt="" />
                <p className="h-24 text-4xl flex justify-center items-center">LZHAS KELGENBAY</p>
            </section>
            <section>
                <div>
                    <p>Tech I work with</p>
                    <ul></ul>
                </div>
                <div>
                    
                </div>
            </section>
        </main>
    )
}