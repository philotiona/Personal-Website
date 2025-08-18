import type { ReactNode } from "react";

export default function Hero(): ReactNode {
    return(
        <main className="h-screen w-full">
            <section className="w-full flex flex-row justify-center items-center">
                <img className="w-12 h-12 flex justify-center items-center " src="moon2.svg" alt="" />
                <p className="h-12 text-4xl flex justify-center items-end text-">lzhas Kelgenbay</p>
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