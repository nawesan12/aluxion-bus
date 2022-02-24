import Head from "next/head";
import Main from "../../components/Detail/Main";

export default function Detail() {
    return(
        <>
            <Head>
                <title>Bus Details - Aluxion Bus</title>
                <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' />
            </Head>

            <Main />
        </>
    )
}