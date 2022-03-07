import { Link } from 'react-router-dom';
import "../styles/Footer.css"

const Footer = () => {
    return(
        <div className="main-footer mb-5">

            <div className="footer-submain">
                <footer>
                    <div className="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-between footer-flex align-items-start ">
                    <div className="width-30">
                        <h6 className="white py-5">Lorem proin volutpat</h6>
                        <p className="grey">Ligula quis sapien nam molestie massa quis pede maecenas quis lacus nunc sed 
                        lectus quis lectus tristique tincidunt sed varius nisl tincidunt lectus pellentesque 
                        sagittis mauris ut leo ullamcorper tortor morbi accumsan.</p>
                        <div className="d-flex justify-content-between pt-5 px-3 justify-content-around">
                            <p><a href="#"><i className="fab fa-facebook grey p-2 bg-secondary "></i></a></p>
                            <p><a href="#"><i className="fab fa-linkedin grey p-2 bg-secondary"></i></a></p>
                            <p><a href="#"><i class="fab fa-discord grey p-2 bg-secondary"></i></a></p>
                            <p><a href="#"><i className="fab fa-twitter grey p-2 bg-secondary"></i></a></p>
                            <p><a href="#"><i class="fab fa-instagram grey p-2 bg-secondary"></i></a></p>
                        </div>
                    </div>
                    <div className="width-30 px-5">
                        <h6 className="white font mx-1 py-5">Nascetur ridiculus mus</h6>
                        <div className="blue">
                            <p>Aliquam eget leo praesent</p><hr className="bg-secondary"/>
                            <p>Vel urna nunc ultricies</p><hr className="bg-secondary"/>
                            <p>Faucibus nunc cum sociis</p><hr className="bg-secondary"/>
                            <p>Natoque penatibus et magnis</p><hr className="bg-secondary"/>
                            <p>Dis parturient montes</p>
                        </div>
                    </div>
                    <div className="width-30">
                        <h6 className="white py-5 font">Contact Us</h6>
                        <p className="grey">Ante dapibus luctus sed quis diam vitae ipsum ultrices vehicula.</p>
                        <form action="https://getform.io/f/fc334ca4-90ec-4fc0-a343-069dfc4a0ca8" method="post">
                            <input className="mt-3 white rounded-3 fw-bold opacity-25 bg-secondary p-2 " type="textarea" placeholder="email"></input><br />
                            <input className="mt-3 white rounded-3 fw-bold opacity-25 bg-secondary p-2 " type="text-area" placeholder="Message"></input><br />
                            <button className="py-2 mt-3 white rounded-pill white bg-primary px-5" type="submit" value="submit">Submit</button>
                        </form>
                    </div>
                   
                    
                    </div>
                    <p className="border mt-5"></p>
                    <nav>
                        <div className="d-flex  justify-content-center py-5 last-footer">
                        <Link to="/"><i className="white fas fa-lg fa-home"></i></Link>
                        <a className="px-4 white" href="#">Terms</a>
                        <a className="white" href="#">Privacy</a>
                        <a className="px-4 white" href="#">Cookies</a>
                        <a className="white" href="#">Disclaimer</a>
                        </div>
                    </nav>
                    <p className="border"></p>
                </footer>
               
        </div>
        
    </div>
    )
}

export default Footer;