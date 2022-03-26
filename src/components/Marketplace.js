import Nav from "./Nav";
import Copyright from "./Copyright";
import "../styles/Marketplace.css";

function Marketplace() {
    return (
        <div>
            <Nav />
            <p className="marketplace topic-marketplace font-medieval py-5">Insignia Marketplace</p>
            <Copyright />
        </div>
    )
}

export default Marketplace;