import Link from 'next/link'

export default function AluxionerPopup(props) {
    return(
        <>
        <section className="overlay">
        <section className="aluxioner-popup">
            <button className="cerrar" onClick={props.cerrar}>X</button>

            <p>Hey {props.name}!</p>
            <p>Cual es tu rumbo, aluxioner?</p>

            <div className="buttons">
                <Link href="/detail"><a>Casa</a></Link>
                <Link href="/detail"><a>Aluxion</a></Link>
            </div>
        </section>
        </section>

        <style jsx>{`
            @keyframes aparecer {
                from {
                    opacity:0;

                }
            }

            .overlay {
                position:fixed;
                top:0;
                right:0;
                height:100vh;
                width:100vw;
                background:#091E42F2;
                display:grid;
                place-items:center;
                z-index:28;
            }

            .aluxioner-popup {
                ${props.active === true ? "display:flex;" : "display:none;"}
                flex-direction:column;
                align-items:center;
                justify-content:space-evenly;
                background:#eee;
                height:14rem;
                width:24rem;
                z-index:30;
            }

            p {
                font-weight:500;
                color:#000;
            }

            button {
                cursor:pointer;
                border:none;
                outline:none;
                background:none;
                align-self:flex-end;
                padding:0 1rem;
            }

            .buttons {
                width:50%;
                margin:0 auto;
                display:flex;
                justify-content:space-evenly;
            }

            .buttons a {
                background:#091E42;
                border-radius:2rem;
                width:5rem;
                padding:.5rem 1rem;
                text-align:center;
                color:#fff;
            }
        `}</style>
        </>
    )
}