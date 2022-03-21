import '../styles/Community.css'
import bottom from '../assets/bottom_brown.png';
import top from '../assets/top_brown.png';
const Community = () => {
    return (
        <div>
             <img src={bottom} alt="" className="rough"/>
        
            <div className="community">
            <h6 className="topic py-5 font-medieval">Game Features</h6>
            </div>
            <img src={top} alt="" className="rough"/>
        </div>
    
    )
}

export default Community;