import Nav from "./Nav";
import Copyright from "./Copyright";
import "../styles/Marketplace.css";

function Marketplace() {
    return (
        <div>
            <Nav />
            <h1 className="marketplace">Marketplace</h1>
            <Copyright />
        </div>
    )
}

export default Marketplace;