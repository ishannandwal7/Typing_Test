import React ,{useState} from 'react';
import "./center.css";

const Center = () => {
    const [lastvala, setlastvala] = useState(null);
    const [inpcounter, setinpcounter] = useState(0);
    const [ind, setind] = useState(0);
    const [charcount, setcharcount] = useState(1);
    const [wordcount, setwordcount] = useState(1);
    const [lastwordct, setlastwordct] = useState(0);
    const [lastcharct, setlastcharct] = useState(0);
    const [timeinseconds, settimeinseconds] = useState(0);
   const [stop, setstop] = useState(0);
   
    let temp="Adverse air quality can kill many organisms including humans  Ozone pollution can cause respiratory disease cardiovascular disease throat inflammation chest pain and congestion Water pollution causes approximately 14000 deaths per day mostly due to contamination of drinking water by untreated sewage in developing countries An estimated 500 million Indians have no access to a proper toilet, Over ten million people in India fell ill with waterborne illnesses in 2013, and 1,535 people died, most of them children. Nearly 500 million Chinese lack access to safe drinking water.A 2010 analysis estimated that 1.2 million people died prematurely each year in China because of air pollution. The high smog levels China has been facing for a long time can do damage to civilians' bodies and cause different diseases. The WHO estimated in 2007 that air pollution causes half a million deaths per year in India. Studies have estimated that the number of people killed annually in the United States could be over 50,000. Oil spills can cause skin irritations and rashes. Noise pollution induces hearing loss, high blood pressure, stress, and sleep disturbance. Mercury has been linked to developmental deficits in children and neurologic symptoms. Older people are majorly exposed to diseases induced by air pollution. " ;
    temp=temp.toLowerCase();
    let teststr="ishan nandwal is great person in iop kio";
    const [txt, settxt] = useState(temp);
    function upd(x){
      settimeinseconds(x);
    }
    function starttime(){
      let time=0;
      let interval=setInterval(() => {
        ++time;
        // console.log("time in second:",time);
        upd(time);
      }, 1000);
  
      return interval;
    }
   

   
  
      return (
      <>
      <h2>test your speed </h2>
        {/* <div className="container-fluid"> */}
            <div className="center_content container">
              {/* <h2>test your speed </h2> */}
              <p className="container-fluid"id="timer">timer <br /> {timeinseconds}</p>
                <p id="show"> {txt}</p>
                
                <input type="text"  placeholder="type here.."  autoFocus id="ishu" onChange={(e)=>{
                    //               to start the timer in seconds

                 
                    if(ind==0){
                      // console.log("Start");
                      let st=starttime();
                      setstop(st);
                      // console.log(st);
                      

                      
                    }
                   
                  

                  // console.log("inp counte:"+inpcounter);
                // console.log("ind value:"+ind);
                  // console.log("value:"+e.target.value);
                  // console.log("inp counter value:"+e.target.value[inpcounter]);
                  if(e.target.value[inpcounter]==txt[ind]  && ind<(txt.length-1)){
                      if(e.target.value[inpcounter]==" "){
                          document.getElementById("ishu").value=null;
                          setinpcounter(0);
                          setlastvala(null);
                          setind(ind+1);
                          setwordcount(wordcount+1);
                      }
                      else{
                        let fr=txt.substr(0,ind);
                        let se=txt.substr(ind+1);
                        document.getElementById("show").innerHTML=fr+"<span>"+txt[ind]+"</span>" +se;
                        // document.getElementById("show").innerHTML=;                        
                        // /document.getElementById("showcontent").innerHTML="tetings";
                        



                                      // for words and char count for results
                        setcharcount(charcount+1);
                        setinpcounter(inpcounter+1);      
                        setlastvala(e.target.value);
                        setind(ind+1);
                          
                        }
                  }
                  else{
                      if(ind<(txt.length-1)){

                          document.getElementById("ishu").value=lastvala;
                          // console.log("incorrect");
                        }
                        else{
                            // alert("completed"+wordcount+"   "+charcount);
                            // stoptime();
                            // clearInterval(testtime);  
                            // show();
                            // console.log(stop,"state");
                            clearInterval(stop);  
                              
                            document.getElementById("vr").classList.remove("disabled");
                            document.getElementById("ishu").value=null;
                            document.getElementById("vr").click();
                          setinpcounter(0);
                          setlastvala(null);
                          settxt(teststr);
                          setind(0);
                          setlastwordct(wordcount);
                          setlastcharct(charcount);
                        //   setcharcount(0);
                        //   setwordcount(0);

                        }
                  }
                  
                }}  />
                {/* <!-- Button to Open the Modal --> */}
<button  type="button" class="btn btn-dark text-light disabled" id="vr" data-toggle="modal" data-target="#myModal">
  View Result
</button>

{/* <!-- The Modal --> */}
<div class="modal fade"  id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      {/* <!-- Modal Header --> */}
      <div class="modal-header">
        <h4 class="modal-title">your score</h4>
        <button type="button" class="close" data-dismiss="modal" onClick={()=>{       setcharcount(1);
                          setwordcount(1);}}>&times;</button>
      </div>

      {/* <!-- Modal body --> */}
      <div class="modal-body">
       {/* total word count:{lastwordct}
       <br />
       total char count :{lastcharct}
       <br />
       total time :{timeinseconds}
       <br /> */}
      
       {/* <Result/> */}
       words per minute (WPM):{ parseInt(lastwordct*(60)/timeinseconds)}
       <br />
       character per minute (CPM):{parseInt(lastcharct*60/ timeinseconds)}
      </div>

      {/* <!-- Modal footer --> */}
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={()=>{       setcharcount(1);
                          setwordcount(1);}}>Close</button>
      </div>

    </div>
  </div>
</div>
            </div>
        {/* </div> */}
        </>
    )
}

export default Center
