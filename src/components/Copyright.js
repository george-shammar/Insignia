import discord from '../assets/discord-icon.png';
import twitter from '../assets/twitter.png';
import "../styles/Copyright.css"


const Copyright = () => {
    return (
        
        <div className="d-flex justify-content-between black px-5 copyright">
            <div className="d-flex"> 
                <h6 className="white font">Copyright &copy; 2022 - All Rights Reserved: </h6>
                <p className="meridian-font white px-2">Insignia</p>
            </div>
            <div className='connect-link d-flex'>
                <a href="https://discord.gg/A4xfZENW2Z" target="_blank" rel="noreferrer"><img src={discord} alt="" className='connect mx-2'/></a>
                <a href="https://twitter.com/Insignia_verse?s=03" target="_blank" rel="noreferrer"><img src={twitter} alt="" className='connect'/></a>
            </div>
            
            <div>
                <p className="meridian-font white"> Powered by ChainGates Corp.</p>
            </div>
        </div>
    
    )
}

export default Copyright;