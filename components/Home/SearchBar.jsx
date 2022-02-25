export default function SearchBar(props) {
    return(
        <>
        <section className={props.isMobileOpen === true ? "bar-container active" : "bar-container"}>
            <input type="text" id="" placeholder={props.isMobileOpen === true ? "N de Parada" : "¿Cuál es tu parada?"}/>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
            </svg>

        </section>

        <style jsx>{`
            svg {
                stroke:#555;
            }

            .bar-container {
                display:flex;
                border-bottom:1px solid #444;
                padding:.3rem;
                width:18rem;
                transition:all .2s ease;
            }    

            .bar-container:focus-within {
                border-bottom:1px solid #fff;
                color:#fff;
                stroke:#fff;
            }

            input {
                background:none;
                border:none;
                outline:none;
                width:16rem;
                color:#fff;
            }

            @media screen and (max-width:1200px) {
                input {

                }

                .bar-container {
                    width:auto;
                    border:none;
                    display:none;
                }

                svg {
                    height:30px;
                    width:30px;
                }

                .active {
                    display:flex;
                    align-items:center;
                    position:absolute;
                    width:100vw;
                    height:3.5rem;
                    padding:0 10vh;
                    z-index:20;
                    border-bottom:2px solid #ccc;
                    background:#FFFFFF08;
                    color:white;
                }

                .bar-container:focus-within {
                    border-bottom:1px solid #fff;
                    color:#fff;
                    stroke:#fff;
                }
            }
        `}</style>
        </>
    )
}