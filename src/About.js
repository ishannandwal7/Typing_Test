import './About.css';
import Timeline from './Timeline';
import Footer from './Footer';
function About(){
    return(
        

        <div className="tr">
            <div className="ab">

           <p>
          <b><i>Hey!</i></b> <br/>
          <br/>

I'm ishan nandwal from indore,india!<br/>
I Am an student of indian institute of information technology!<br/>
Feel free to get in touch or take a look at my past work below.<br/>
           </p>
            </div>
            <div className="sec">
           
                <h1><b>port-folio</b></h1>
                
            </div>
            <div>
                <Timeline/>
                <Footer/>
            </div>
           

        </div>
        
    );
}
export default About;