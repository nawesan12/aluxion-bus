import { useState } from "react"
import { useRouter } from "next/router"

export default function Stop(props) {

    const router = useRouter()

    return(
        <>
        <section className="stop">
            <div className="back" onClick={() => router.push('/')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#42526E" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="5" y1="12" x2="11" y2="18" />
                <line x1="5" y1="12" x2="11" y2="6" />
                </svg>
            </div>
            <span>Autobuses Cercanos</span>
            <div className="props">
                <h1>318, Ruben Dario</h1>
                <div className="buttons">
                    <svg onClick={props.setGrid} xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-layout-grid ${props.layout === "grid" ? "prop-active" : ""}`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#42526E" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="4" y="4" width="6" height="6" rx="1" />
                        <rect x="14" y="4" width="6" height="6" rx="1" />
                        <rect x="4" y="14" width="6" height="6" rx="1" />
                        <rect x="14" y="14" width="6" height="6" rx="1" />
                    </svg>

                    <svg onClick={props.setColumn} xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-layout-list ${props.layout === "column" ? "prop-active" : ""}`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#42526E" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="4" y="4" width="16" height="6" rx="2" />
                        <rect x="4" y="14" width="16" height="6" rx="2" />
                    </svg>
                </div>
            </div>
        </section>

        <style jsx>{`
            .stop {
                display:flex;
                flex-direction:column;
                width:85%;
                border-bottom:1px solid #42526E;
                margin:2rem auto;
            }

            .back {
                cursor:pointer;
                max-width:max-content;
            }

            span {
                color:#42526E;
            }

            h1 {
                font-size:1.8rem;
                margin:.4rem 0;
            }

            .props {
                display:flex;
                justify-content:space-between;
                align-items:flex-end;
            }

            .buttons {
                margin:.4rem 0;
            }

            svg {
                cursor:pointer;
                transition:all .2s ease;
            }

            svg:hover {
                fill:white;
                stroke:white;
            }

            .prop-active {
                fill:white;
                stroke:white;
            }
        `}</style>
        </>
    )
}