function Footer(){
    return (
        <div className="footer container">
            <div>
                <a href="/" className="title mr-1">Formable</a>
                <span>&copy; {new Date().getFullYear()}</span>
            </div>
            <div>
                <p className="title">Special Thanks to</p>
                <p className="li">React</p>
                <p className="li">Firebase</p>
                <p className="li">Github</p>
            </div>
        </div>
    )
}

export default Footer