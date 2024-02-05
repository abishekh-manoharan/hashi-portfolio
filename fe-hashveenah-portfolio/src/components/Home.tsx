import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            Hashveenah Manoharan
            <Link to='about'>About</Link>
            <Link to='projects'>Projects</Link>
            <Link to='contact'>Contact</Link>
        </div>
    );
}

export default Home;