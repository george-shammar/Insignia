import '../styles/Event.css';

const Event = () => {
    return (
        <div className="event">
             <h2 className=" features py-5 font-medieval white ">Game Features</h2>






             <div className="d-flex py-5 px-5 justify-content-between font-roboto">
            <div className="border rounded card-space shadow-lg">
                    <article className="px-2">
                        <i className="fas fa-door-open pink py-4 icon-size action"></i>
                        {/* <img src={castle} className="py-4 castle action" /> */}
                        <h6 className="bold pb-3 action font-meridian">WALLET SETUP</h6>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </article>
                </div>
                <div className="border rounded card-space shadow-lg">
                <article className="px-2">
                    <i class="fas fa-shopping-cart py-4 icon-size action"></i>
                    <h6 className="bold pb-3 action font-meridian">GET TOKEN</h6>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </article>
                </div>
                <div className="border rounded card-space shadow-lg">
                <article className="px-2">
                <i class="fas fa-paint-brush pink py-4 icon-size action"></i>
                    <h6 className="bold pb-3 action font-meridian">CREATE GAME ASSET</h6>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </article>
                </div>
                
                {/* <div className="border rounded card-space shadow-lg">
                <article className="px-2">
                    <i class="fas fa-book-open py-4 icon-size action"></i>
                    <h6 cclassName="bold pb-3 action font-meridian">DOWNLOAD AND PLAY</h6>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
               
                </article>
                </div> */}

                <div className="border rounded card-space shadow-lg">
                <article className="px-2">
                    <i class="fas fa-shopping-cart py-4 icon-size action"></i>
                    <h6 className="bold pb-3 action font-meridian">DOWNLOAD & PLAY</h6>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </article>
                </div>
            </div>
        </div>
        
    
    )
}

export default Event;