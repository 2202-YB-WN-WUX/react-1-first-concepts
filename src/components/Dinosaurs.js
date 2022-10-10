const Dinosaur = ({ name, diet, coolnessFactor }) => {
    return (
        <>
            <h3>{name}</h3>
            <p>{diet}</p>
            <p>{coolnessFactor}/10</p>
        </>
    )
}

const Dinosaurs = () => {
    return (
        <div id="dinosaurs">
            <div className="section">
                <h2>Dinosaurs</h2>
                <Dinosaur name="P-rex" diet="carnovoire" coolnessFactor="10" />
                <Dinosaur name="Q-rex" diet="carnovoire" coolnessFactor="10" />
            </div>
        </div>
    )
}

export default Dinosaurs