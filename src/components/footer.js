import React from 'react'
import "./footer.css";
const getyear=()=>{
let x=new Date().getFullYear();
console.log(x);
return x;

}

const Footer = () => {
    return (
        <>
        <div className="foot">
            <div className="row">
                <div className="col">
                    <h1>site map</h1>
                </div>
                <div className="col">
                    <h1>about me</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <a href="#">HOME</a>
                </div>
                <div className="col">
                    <i className="fa fa-instagram">
                        <a href="https://www.instagram.com/ishan_nandwal/" className="footer-link">

                    instagram
                        </a>
                    </i>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <a href="#"  className="disabled">profile</a>
                </div>
                <div className="col">
                    <i className="fa fa-linkedin">
                    <a href="https://www.linkedin.com/in/ishan-nandwal-a314011ba/" className="footer-link">
                    linkedin

                    </a>
                    </i>
                </div>
            </div>            <div className="row">
                <div className="col">
                    <a href="#">service</a>
                </div>
                <div className="col">
                    <i className="fa fa-github">
                        <a href="#" className="footer-link">

                    github
                        </a>
                    </i>
                </div>
            </div>            <div className="row">
                <div className="col">
                    <a href="https://ishannandwal7.github.io/novelcoronalive.github.io/about.html">about</a>
                </div>
                <div className="col">

                    <i className="fa fa-envelope">
                    <a href="mailto:ishannnandwal7@gmail.com" className="footer-link">

                    email
                    </a>
                    </i>
                </div>
            </div>
            <p className="copyright">© ishan nandwal {getyear()} </p>
        </div>
            
        </>
    )
}

export default Footer
