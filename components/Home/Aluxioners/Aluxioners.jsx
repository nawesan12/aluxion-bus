import data from './Aluxioners.json'
import AluxionerCard from './AluxionerCard'

export default function Aluxioners() {

    return(
        <>
        
        <section className="cards-container">
            <span>Team</span>
            <h2>Aluxioners</h2>
            <section className="cards">
                {data.map((aluxioner, index) => (
                    <AluxionerCard
                        key={index}
                        name={aluxioner.name}
                        role={aluxioner.role}
                        toAluxion={aluxioner.toAluxion}
                        toHome={aluxioner.toHome}
                        image={aluxioner.image}
                    />
                ))}
            </section>
        </section>
        <style jsx>{`
                .cards {
                    width:100vw;
                    display:flex;
                    justify-content:space-evenly;
                    flex-wrap:wrap;
                    padding:2rem 0;
                }

                .cards-container {
                    padding:6vh 0 10vh 0;
                }

                h2, span {
                    padding:0 2.6rem;
                }

                span {
                    opacity: .5;
                    font-size:.95rem;
                }

        `}</style>
        </>
    )
}