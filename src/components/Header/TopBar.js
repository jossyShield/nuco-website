

const  TopBar = () => {
  return (
    <div className="kingster-top-bar" >
        <div className="kingster-top-bar-background" >
        </div>
        <div className="kingster-top-bar-container kingster-container " >
            <div className="kingster-top-bar-container-inner clearfix" >
                <div className="kingster-top-bar-left kingster-item-pdlr">
                    <a style={{'margin-right': '30px' }} href="#">
                        <i className="fa fa-envelope-o font-size-base opacity-60 mr-1"></i> info@nucoschools.com
                    </a>
                    <a style={{'margin-right': '30px'}} href="#">
                        <i className="fa fa-phone font-size-base opacity-60 mr-1"></i> 0703-6325-281 / 0806-1609-469
                    </a>
                    <a href="contact.html" style={{'margin-right': '30px' }}>Live Chat</a>
                </div>
                <div className="kingster-top-bar-right kingster-item-pdlr">
                    <div className="kingster-top-bar-right-social" >
                        <a href="https://www.facebook.com/NCCUyo/" target="_blank" className="gdlr-core-social-network-icon" title="facebook"  ><i className="fa fa-facebook" ></i></a>
                        <a href="#" target="_blank" className="gdlr-core-social-network-icon" title="youtube"  ><i className="fa fa-youtube" ></i></a>
                        <a href="#" target="_blank" className="gdlr-core-social-network-icon" title="twitter"  ><i className="fa fa-twitter" ></i></a>
                        <a href="#" target="_blank" className="gdlr-core-social-network-icon" title="instagram"  ><i className="fa fa-instagram" ></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopBar
