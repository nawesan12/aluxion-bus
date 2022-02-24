import BusItem from "./BusItem";
import Image from "next/image";

import Fade from 'react-reveal/Fade'

export default function BusList({ layout }) {
    return(
        <>
            <section className="bus-list">
                <Fade top delay={500}>
                    <div className="line-container">
                        <div className="bus-container">
                            <Image src="/images/bus.png" alt="" layout="fill" objectFit="cover" />
                        </div> 
                        <h3>Linea 220</h3>
                    </div>
                    <section className="list">
                        <BusItem layout={layout}/>
                        <BusItem layout={layout}/>
                        <BusItem layout={layout}/>
                        <BusItem layout={layout}/>
                        <BusItem layout={layout}/>
                        <BusItem layout={layout}/>
                    </section>
                </Fade>

            </section>
            

            <style jsx>{`
                ::-webkit-scrollbar {
                    width: 5px;
                }

                ::-webkit-scrollbar-thumb {
                    background: #1D3051;
                }

                ::-webkit-scrollbar-track {
                    width: 5px;
                }

                .bus-list {
                    width:50vw;
                    height:100%;
                    overflow-x:hidden;
                }    

                .list {
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:center;
                }

                .line-container {
                    display:flex;
                    align-items:center;
                    margin-left:10vh;
                    margin-top:5vh;
                }

                .bus-container {
                    position:relative;
                    height:1.2rem;
                    width:1rem;
                    margin:0 .5rem;
                }

                h3 {
                    font-weight:500;
                }

                .floating-map {
                    display:none;
                }

                @media screen and (max-width:1200px) {
                    .bus-list {
                        width:100vw;
                    }

                    .line-container {
                        margin:2rem 1rem .5rem;
                    }

                    .floating-map {
                        position:fixed;
                        height:3rem;
                        width:3rem;
                        bottom:2rem;
                        right:2rem;
                        background:red;
                    }
                }
            `}</style>
        </>
    )
}