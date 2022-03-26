import Nav from "./Nav";
import Copyright from "./Copyright";
import "../styles/Marketplace.css";

function Marketplace() {
    return (
        <div>
            <Nav />
            <div className="marketplace">
                <p className="topic-marketplace font-medieval pt-5">Insignia Marketplace</p>
                <p className="market-text gold">Own, Rent, Borrow And Lend Unique Assets</p>
                <Link to="/WalletSetup" ><p className="wallet black font-meridian rounded-pill mt-3 py-2">Sell</p></Link>
                {/* <div>
                    <Link to="/WalletSetup" ><p className="wallet white font-meridian rounded-pill mt-3 py-2">Sell</p></Link>
                </div> */}
            </div>
            
            <div className="py-3">
                <Copyright />
            </div>
            
        </div>
    )
}

export default Marketplace;