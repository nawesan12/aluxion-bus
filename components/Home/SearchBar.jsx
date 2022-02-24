export default function SearchBar() {
    return(
        <>
        <section className="bar-container active">
            <input type="text" id="" placeholder="¿Cuál es tu parada?"/>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
        </section>

        <style jsx>{`
            .bar-container {
                display:flex;
                border-bottom:1px solid #ccc;
                padding:.3rem;
                width:18rem;
            }    

            input {
                background:none;
                border:none;
                outline:none;
                width:16rem;
                color:#FFF;
            }

            @media screen and (max-width:1200px) {
                input {
                }

                .bar-container {
                    width:auto;
                    border:none;
                }

                svg {
                    height:30px;
                    width:30px;
                }

                .active {
                    display:flex;
                    position:absolute;
                    width:90vw;
                    padding:0 10vh;
                    z-index:15;
                    border-bottom:2px solid #ccc;
                }
            }
        `}</style>
        </>
    )
}