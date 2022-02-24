import { useState, useRef, useEffect } from 'react'

import mapboxgl from 'mapbox-gl'
import "mapbox-gl/dist/mapbox-gl.css"; 

export default function BusMap(props) {

    const [map, setMap] = useState()
    const mapNode = useRef()

    useEffect(() => {
        const node = mapNode.current;

        if (typeof window === "undefined" || node === null) return;
    
        const mapboxMap = new mapboxgl.Map({
          container: node,
                accessToken: 'pk.eyJ1IjoibmF3ZXNhbjEyIiwiYSI6ImNsMDBodHRvMjBraWczbnI4eW02d2JiM2wifQ.Dv6VAACK0o4iGh64xHzNdQ',
                style: "mapbox://styles/mapbox/streets-v11",
          center: [-74.5, 40],
          zoom: 9,
        });
    
        setMap(mapboxMap);
    
            return () => {
          mapboxMap.remove();
        };
      }, []);

    return(
        <>
            <section className={props.isMobileOpen === true ? "map-container active" : "map-container"}>
                <header>
                    <svg onClick={props.back} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="5" y1="12" x2="11" y2="18" />
                        <line x1="5" y1="12" x2="11" y2="6" />
                    </svg>
                </header>

                <section 
                    ref={mapNode}
                    style={{width:'100%', height:'100%'}}
                />
            </section>

            <style jsx>{`
                .map-container {
                    height:100vh;
                    width:100%;
                    display:grid;
                    place-items:center;
                    background:#292929;
                    color:#eee;
                }    

                header {
                    display:none;
                }

                @media screen and (max-width:1200px) {
                    .map-container {
                        display:block;
                        position:fixed;
                        background:#aaa;
                        top:0vh;
                        left:0;
                        height:100%;
                        width:100vw;
                        z-index:15;
                        transform:translateX(110%);
                        transition: all .3s ease;
                    }

                    header {;
                        display:flex;
                        align-items:center;
                        padding:0 1.5rem;
                        height:10vh;
                        width:100vw;
                        background:#091E42;
                    }

                    .active {
                        transform:translateX(0%)
                    }
                }
            `}</style>
        </>
    )
}