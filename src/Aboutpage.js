import './Aboutpage.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Particles from "react-tsparticles";
function Aboutpage(){
    return(
        <div>

        <Navbar/>
        <div id="tes">

        <Particles
      options={{
          background: {
              color: {
                  value: "black",
                },
                position:"50% 50%",
                repeat:"no-repeat",
          size:"cover",
          
        },
        fullScreen:{
            enable:true,
            zIndex:0,
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
                enable: true,
              mode: "push",
            },
            onHover: {
                enable: false,
                mode: "repulse",
              parallax:{
                  enable:true,
                  force:30,
                smooth:10
            },
        },
        
        resize: true,
    },
    modes: {
        bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
              duration: 0.4,
            },
        },
    },
    particles: {
          color: {
              value: "#ffffff",
          },
          links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
          collisions: {
              enable: true,
            },
          move: {
              direction: "down",
              enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
        },
          number: {
              density: {
              enable: true,
              value_area: 1000,
            },
            value: 40,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            random: true,
            value: 5,
        },
    },
    detectRetina: true,
      }}/>
    </div>
        <Footer/>
        </div>
    );
}
export default Aboutpage;