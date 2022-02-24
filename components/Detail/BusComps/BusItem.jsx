export default function BusItem(props) {
    return(
        <>
        <article className="bus-item">
            <p className="bus-number">220</p>
            <div className="place">
                <h3>Plaza Lima</h3>
                <span>Hortaleza</span>
            </div>
            <div className="timing">
                <p className="time">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alarm" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffbf00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="13" r="7" />
                    <polyline points="12 10 12 13 14 13" />
                    <line x1="7" y1="4" x2="4.25" y2="6" />
                    <line x1="17" y1="4" x2="19.75" y2="6" />
                    </svg>4 <span className="unity">min.</span>
                </p>
                <p className="distance">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-git-commit" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00ff30" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="12" r="3" />
                    <line x1="12" y1="3" x2="12" y2="9" />
                    <line x1="12" y1="15" x2="12" y2="21" />
                    </svg>500 <span className="unity">met.</span>
                </p>
            </div>
        </article>

        <style jsx>{`
            .bus-item {
                display:grid;
                grid-template-columns:25% 1fr;
                grid-template-rows:4rem 2rem;
                transition:all .5s ease;
                ${props.layout === "grid" ? "width:40%;" : "width:75%;"}
                border-radius:.3rem;
                background:#1D3051;
                color:#fff;
                margin:.5rem;
                cursor:pointer;
            }

            .bus-item:hover {
                background:#eee;
                color:#000;
            }

            .bus-number {
                grid-row: 1 / 2;
                grid-column: 1 / 2;
                display:grid;
                place-items:center;
                font-weight:bold;
                ${props.layout === "grid" ? "font-size:1.3rem;" : "font-size:2rem;"}
            }

            .place {
                grid-row: 1 / 2;
                grid-column: 2 / 3;
                padding:.4rem;
                display:flex;
                flex-direction:column;
                justify-content:center;
            }  

            .place span {
                font-size:.8rem;
                opacity:.7;
                font-weight:500;
            }  

            .timing {
                grid-row: 2 / 3;
                grid-column: 2 / 3;
                display:flex;
                justify-content:space-between;
                padding: .3rem .6rem;
                align-items:center;
                font-size:.85rem;
            }

            .time {
                display:flex;
                align-items:flex-end;
                color:#ffbf00;
            }

            .distance {
                display:flex;
                align-items:flex-end;
                color:#00ff30;
            }

            .unity {
                font-size:.75rem;
            }

            @media screen and (max-width:1200px) {
                .bus-item {
                    width:90vw;
                    margin:.5rem 0;
                }        

                .place {
                    font-size:1.35rem;
                }

                .place span {
                    font-size:.9rem;
                }

                .bus-number {
                    font-size:1.8rem;
                }

                .timing {
                    font-size:1rem;
                }
            }
        `}</style>
        </>
    )
}