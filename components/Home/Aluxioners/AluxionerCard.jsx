import Image from "next/image";
import { useState } from "react";
import AluxionerPopup from "./AluxionerPopup";

export default function AluxionerCard(props) {
    
    const [modal, setModal] = useState(false)

    return(
        <>
            <article className="card" onClick={() => setModal(true)}>
                <div className="image-container">
                    <Image src={props.image} alt={props.name + " - Aluxioner"} layout="fill" objectFit="cover"/>
                </div>
                <h3>{props.name}</h3>
                <span>{props.role}</span>
            </article>            
            
            { modal === true ? <AluxionerPopup 
                name={props.name}
                active={modal}
                cerrar={() => setModal(!modal)}
                toHome={props.toHome}
                toAluxion={props.toAluxion}
            /> : <></> }
            

            <style jsx>{`
                @keyframes aparecer {
                    from {
                        position:relative;
                        top:-5rem;
                        opacity:0
                    }

                    to {
                        position:relative;
                        top:0;
                        opacity:1;
                    }
                }

                .card {
                    border:2px solid transparent;
                    cursor:pointer;
                    padding:.2rem;
                    border-radius:.2rem;
                    transition:all .1s ease;
                    mix-blend-mode:screen;
                    animation: aparecer 1s;
                }   

                .card:hover {
                    transform:scale(1.1);
                }

                .image-container {
                    position:relative;
                    width:10rem;
                    height:10.5rem;
                    background:#091E42;
                    mix-blend-mode: screen;
                }

                h3 {
                    margin:.3rem 0 0;
                }

                span {
                    font-size:.8rem;
                    color:#aaa;
                }
            `}</style>
            
        </>
    )
}