import { useState } from 'react'
import SearchBar from './SearchBar'

export default function Hero() {

    const [openSearchBar, setOpenSearchBar] = useState(false)

    return(
        <>
            <section className="hero">
                <div className="slogan-container">
                    <span className="slogan">
                        {`Don't`} be late, <br /> aluxioner
                    </span>
                </div>

                <SearchBar />
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

                @media screen and (max-width:1200px) {
                    .slogan {
                        font-size:2.6rem;
                    }

                    .hero {
                        height:60vh;
                        padding:10vh 0;
                        align-items:end;
                    }
                }
            `}</style>
        </>
    )
}