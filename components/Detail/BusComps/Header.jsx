import { useState } from 'react'
import SearchBar from '../../Home/SearchBar'

export default function Header() {

    const [navActive, setNavActive] = useState(false);

    function toggleNav() {
        setNavActive(!navActive)
    }

    return(
        <>
            <header>
                <h1>Aluxion</h1>
                <div className={navActive === true ? "search-container active" : "search-container"}>
                    <SearchBar type={navActive === true ? "BUS_DETAILS" : "HOME"}/>
                </div>
                <div className="burger" onClick={toggleNav}>
                    <div className={navActive === true ? "line open" : "line"}/>
                    <div className={navActive === true ? "line open inverse" : "line"}/>
                </div>
            </header>

            <style jsx>{`
                header {
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    height:14vh;
                    width:100%;
                    padding:2vh 8vh;
                }    

                h1 {
                    letter-spacing:.1rem;
                }

                .burger {
                    display:none;
                }

                @media screen and (max-width:1200px) {
                    .search-container {
                        position:absolute;
                        top:26vh;
                        opacity:0;
                        transition:all .2s ease;
                    }

                    .burger {
                    display:flex;
                    flex-direction:column;
                    justify-content:space-evenly;
                    height:3rem;
                    width:2rem;
                    }

                    .line {
                        width:2rem;
                        height:2px;
                        background:#FFF;
                        transition:all .2s ease;
                    }

                    .hidden {
                        transform:translateX(-110%);
                    }

                    .active {
                        opacity:1;
                    }

                    .open {
                        position:absolute;
                        transform:rotate(45deg)
                    }

                    .inverse {
                        transform:rotate(-45deg)
                    }
                }
            `}</style>
        </>
    )
}