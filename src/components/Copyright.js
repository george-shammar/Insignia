import discord from '../assets/discord-icon.png';
import twitter from '../assets/twitter.png';
import "../styles/Copyright.css"


const Copyright = () => {
    return (
        
        <div className="d-flex justify-content-between black px-5 copyright  pt-3">
            <div className="d-flex"> 
                <h6 className="white font">Copyright &copy; 2022 - All Rights Reserved: </h6>
                <p className="meridian-font white px-2">Insignia</p>
            </div>
            <div className='connect-link d-flex'>
                <img src={discord} className='connect'/>
                <img src={twitter} className='connect'/>
            </div>
            
            <div>
                <p className="meridian-font white"> Powered by ChainGates Corp.</p>
            </div>
        </div>
    
    )
}

export default Copyright;