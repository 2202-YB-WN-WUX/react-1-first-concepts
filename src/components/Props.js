const GreetingMessage = (props) => {
    console.log(props)
    return (
        <div id="greeting">
            Hello, {props.name}. {props.message}
        </div>
    )
}

const Car = (props) => {
    return (
        <div className="car">
            <h3>{props.type}</h3>
            <p>${props.price}</p>
        </div>
    )
}

const Props = () => {
    return (
        <div className="section">
            <h2>Basic props</h2>
            <p>You can look at props as arguments - it's a way to send data down between components.</p>
            <GreetingMessage name="Tim" message="Welcome back!" />
            <Car type="BMW" price="10" />
            <Car type="Lexus" price="12" />
            <Car type="Toyota" price="100" />
        </div>
    )
}

export default Props;

// Create a dinosaur section component, Dinosaur.js which has a header which reads “My Favorite Dinosaurs.” 

// Add a paragraph of text under the title which reads “here’s a list of the coolest dinosaurs.”

// Within Dinosaurs.js, render 3 <Dinosaur /> components, with 3 properties, name, diet, and coolness factor.

