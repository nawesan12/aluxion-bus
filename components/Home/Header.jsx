import Link from 'next/link'
import { useState } from 'react'

export default function Header() {

    const [navActive, setNavActive] = useState(false);

    function toggleNav() {
        setNavActive(!navActive)
    }

    return(
        <>
        <header className="app-home-header">
            <h1 className="logo">Aluxion</h1>
            <nav className="navigation">
                <ul className={navActive === true ? "list active" : "list hidden"}>
                    <li className="item">
                        <Link href="#"><a href="#">metro</a></Link>
                    </li>
                    <li className="item">
                        <Link href="#"><a href="#">cercanias</a></Link>
                    </li>
                    <li className="item">
                        <Link href="#"><a href="#">carsharing</a></Link>
                    </li>
                </ul>
            </nav>

            <div className="burger" onClick={toggleNav}>
                <div className={navActive === true ? "line open" : "line"}/>
                <div className={navActive === true ? "line open inverse" : "line"}/>
            </div>
        </header>

        <style jsx>{`
            .app-home-header {
                width:100vw;
                height:15vh;
                display:flex;
                align-items:center;
                justify-content:space-between;
                padding:0 3rem;
            }    

            .logo {
                font-size:1.4rem;
                letter-spacing:.15rem;
                font-weight:400;
            }

            .list {
                display:flex;
            }

            .item {
                margin:0 2rem;
                border-bottom:1px solid transparent;
            }

            .item:hover {
                border-bottom:1px solid #ccc;
            }

            .burger {
                display:none;
            }

            @media screen and (max-width:1200px) {
                .app-home-header {
                    height:14vh;
                    padding:1.5rem;
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

                .list {
                    position:fixed;
                    top:15vh;
                    left:0;
                    height:85vh;
                    width:100vw;
                    flex-direction:column;
                    padding:3rem 0;
                    align-items:center;
                    background:#091E42;
                    transition:all .3s ease;
                    z-index:20;
                }

                .item {
                    font-size:1.5rem;
                    font-weight:500;
                    margin:1rem 0;
                }

                .hidden {
                    transform:translateX(-110%);
                }

                .active {
                    transform:translateX(0%);
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