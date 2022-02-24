import BusList from "./BusComps/BusList";
import BusMap from './MapComps/BusMap'
import Header from "./BusComps/Header";
import Stop from "./BusComps/Stop";
import Image from "next/image";
import Slide from "react-reveal";

import { useState } from "react";

export default function Main() {

    const [openMobileMap, setOpenMobileMap] = useState(false)
    const [layout, setLayout] = useState("grid")

    return(
        <>
        <section className="details">
            <Slide left ssrReveal>
                <div className="bus-details">
                    <Header />
                    <Stop setGrid={() => setLayout("grid")} setColumn={() => setLayout("column")} layout={layout}/>
                    <BusList layout={layout}/>
                </div>
            </Slide>
            <BusMap isMobileOpen={openMobileMap} back={() => setOpenMobileMap(false)}/>
            <article className="floating-map" onClick={() => setOpenMobileMap(!openMobileMap)}>
                <Image src="/images/minimap.png" alt="" layout="fill" objectFit="cover" />
            </article>
        </section>

        <style jsx>{`
            .details {
                width:100vw;
                height:100vh;
                display:flex;
                overflow:hidden;
            }

            .bus-details {
                display:flex;
                flex-direction:column;
            }

            .floating-map {
                display:none;
            }

            @media screen and (max-width:1200px){
                .floating-map {
                    display:block;
                    position:fixed;
                    height:4.5rem;
                    width:4.5rem;
                    bottom:1.5rem;
                    right:1.5rem;
                    border-radius:50%;
                    overflow-x:hidden;
                }
            }
            
        `}</style>
        </>
    )
}