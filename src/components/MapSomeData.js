const chocolateData = [
    {
        name: "Whittakers Berry & Biscuit",
        price: 12,
        image: "https://www.alphafoodie.com/wp-content/uploads/2020/06/milk-chocolate-bar-square.jpeg"
    },
    {
        name: "Whittakers Dairy Milk",
        price: 6,
        image: "https://media.istockphoto.com/photos/chocolate-pieces-picture-id1136447014?k=20&m=1136447014&s=612x612&w=0&h=7nzuu1yPcNB3sVj7h9hmJKoXjugjuT4DQeRM4A7kl2M="
    },
    {
        name: "Cadbury Caramello",
        price: 7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWlOmuyRuu4nqDE4PB7kkW1ufen0Uy9Beucg&usqp=CAU"
    }
]

const AllChocolate = () => {
    const renderedChocolate = chocolateData.map(
        (chocolate, index) => {
            return (
                <div key={index}>
                    <h3>{chocolate.name}</h3>
                    <p>${chocolate.price}</p>
                    <img src={chocolate.image} alt="chocolate" />
                </div>
            )
        }
    )

    return renderedChocolate
}

const MapSomeData = () => {
    return (
        <div className="section">
            <h2>Map some data</h2>
            <p>This component will render a list of chocolate from an array of objects.</p>
            <div>
                <AllChocolate />
            </div>
        </div>
    )
}

export default MapSomeData

// Add a chocolate image to each object
// Render the images on the page
