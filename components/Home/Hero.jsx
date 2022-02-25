import { useState } from 'react'
import SearchBar from './SearchBar'

export default function Hero() {

    const [openSearchBar, setOpenSearchBar] = useState(false)

    return(
        <>
            <section className="hero">
                <div className={openSearchBar === true ? "hidden" : "slogan-container"}>
                    <span className="slogan">
                        {`Don't`} be late, <br /> aluxioner
                    </span>
                </div>

                <SearchBar isMobileOpen={openSearchBar}/>
                
                <svg xmlns="http://www.w3.org/2000/svg" className={openSearchBar === true ? "hidden" : "active"} onClick={() => setOpenSearchBar(true)} width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
            </section>

            <style jsx>{`
                .hero {
                    height:50vh;
                    width:100vw;
                    display:flex;
                    justify-content:space-evenly;
                    align-items:center;
                    padding:20vh 0;
                }    

                .slogan {
                    font-size:6rem;
                    font-weight:bold;
                }

                .hidden, .active {
                    display:none;
                }

                @media screen and (max-width:1200px) {
                    .slogan {
                        font-size:2.6rem;
                    }

                    .hero {
                        height:60vh;
                        padding:10vh 0;
                        align-items:center;
                    }

                    .hidden {
                        display:none;
                    }

                    .active {
                        display:flex;
                    }
                }
            `}</style>
        </>
    )
}