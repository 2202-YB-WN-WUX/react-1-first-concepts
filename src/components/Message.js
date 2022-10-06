const grabUserName = () => {
    let name = prompt("What is your name?")
}

const greeting = () => {
    alert("Hello")
}

const Message = () => {
    return (
        <div className="section">
            <img src="https://avatars.githubusercontent.com/u/26725777?v=4" alt="random picture" />
            <p>Welcome to the homepage</p>
            <button onClick={greeting}>Click me bro</button>
        </div>
    )
}

export default Message;