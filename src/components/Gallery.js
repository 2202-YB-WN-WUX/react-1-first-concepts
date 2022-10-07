const Title = () => {
    return (
        <h2>Gallery</h2>
    )
}

const GalleryImages = () => {
    return (
        <div>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="random" />
            <img src="https://picsum.photos/seed/23r98j/200/300" alt="random" />
            <img src="https://picsum.photos/seed/W121s/200/300" alt="random" />
        </div>
    )
}

const ContactInfo = () => {
    return (
        <div>
            <h3>Contact the photographer</h3>
            <p>joline@lorempicsum.com</p>
        </div>
    )
}

const Gallery = () => {
    return (
        <div className="section">
            <Title />
            <GalleryImages />
            <ContactInfo />
        </div>
    )
}

export default Gallery