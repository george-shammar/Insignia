import Nav from "./Nav";
import Copyright from "./Copyright";
import { Link } from 'react-router-dom';
import "../styles/Marketplace.css";

function Marketplace() {
    return (
        <div>
            <Nav />
            <div className="marketplace">
                <p className="topic-marketplace font-medieval pt-5">Insignia Marketplace</p>
                <p className="market-text gold">Own, Rent, Borrow And Lend Unique Assets</p>

                <div className="d-flex capsules">
                    <input className="rounded-pill mt-2" type="text" placeholder="Search"></input>
                    <Link to="/WalletSetup" ><p className="wallet gold font-meridian rounded-pill mt-3 py-2 px-5">Sell</p></Link>
                    <Link to="/WalletSetup" ><p className="wallet gold font-meridian rounded-pill mt-3 py-2 px-5">Rent Out</p></Link>


                    <select className="form-select rounded-pill px-5">
                        <option selected>Filter</option>
                        <option value="1">For Rent</option>
                        <option value="2">For Sale</option>
                    </select>
                </div>
                
                
            </div>
            
            <div className="py-3">
                <Copyright />
            </div>
            
        </div>
    )
}

export default Marketplace;