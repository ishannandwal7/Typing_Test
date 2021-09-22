import './Footer.css';
function Footer(){
    return(
        <div className="foott">
        <div className="leftt">
            <h2>contact me</h2><br/>
          
                <p id="maill"> Email :<a href="ishannandwal7@gmail.com">Here</a></p>
                <p> instagram:<a href="https://www.instagram.com/ishan_nandwal/">here</a></p>
                <p> linked In:<a href="https://www.linkedin.com/in/ishan-nandwal-a314011ba/">here</a></p>

          
        </div>
        <div className="rightt">
            <h2>site map</h2><br/>
            
                <p><a href="#">About me</a></p>
                <p><a href="#">dream list</a></p>
                <p><a href="#">home</a></p>

          
        </div>
        <div className="copyright">
            <p>© 2021 ishan nandwal
</p>
        </div>
    </div>
    );
}
export default Footer;