import React from 'react'



function SetTime(v) {

    var ms = v % 1000;
    v = (v - ms) / 1000;
    var secs = v % 60;
    v = (v - secs) / 60;
    var mins = v % 60;
    var hrs = (v - mins) / 60 % 24;


    return { hrs, mins, secs }

}
class Timer extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                T: 0,
                ms: 0,
                restart:false
            }
          
        }



        strt = () => {
        const T1 = setInterval( 
        () => {
                   
                         this.setState({
                             ms: this.state.ms += 1000,
                            
                         })

                  },
                     1000
                )
               this.setState({T:T1})
  
            }

        
    

        stop = () => {
            clearInterval(this.state.T)
        this.setState({
            T:0,
            restart:true
        })

        }


        Reset = () => {
            this.setState({
                T: 0,
                ms: 0,
                restart:false
            })
            clearInterval(this.state.T)
        }

//       Clock = () => {
//         if (this.state.T===0){
            
//             const idInterval =setInterval( 
//                 () => {
//                     this.setState({
//                     ms: this.state.ms += 1000,
//                     T:idInterval,
//                     restart :false  
//                     })
//                      },1000 )
                    
//         }
//          if (this.state.restart===false && this.state.T!==0) {
           
//         clearInterval(this.state.T)
//         this.setState({
//             T:0,
//             restart:true
//         })
//         }


//         if (this.state.restart===true ){
          
//        const idInterval = setInterval( 
//             () => {
//                 this.setState({
//                    T: this.state.T, 
//                 ms: this.state.ms += 1000,
//                restart :false              
//                 })
//                  },1000 )

//                  clearInterval(idInterval)

                 
//     }           
// }
        render() {
            return (
                <div>
                <Dynamic time={SetTime(this.state.ms)}  btn1 = {this.state.T===0 ? this.strt:this.stop}  btn2={this.Reset}/>
              
                </div>
            )
        }
}

    export default Timer

    const Dynamic = ({ time , btn1, btn2 }) => {
        return (
            <div className="Phone">
                <div className="square">
                    <div>
                        <p className="numbers">{time.hrs.toString().padStart(2, '0')}</p>
                        <p className="text"> Hours</p>
                    </div>
                    <p> : </p>
                    <div>
                        <p className="numbers">{time.mins.toString().padStart(2, '0')}</p>
                        <p className="text"> Minutes</p>
                    </div>
                    <p> : </p>
                    <div>
                        <p className="numbers">{time.secs.toString().padStart(2, '0')}</p>
                        <p className="text"> Seconds</p>
                    </div>

                </div>

                <div className="buttons">
                    <button className="btn btn-outline-success" onClick={btn1}> Start/Pause </button>
                    <button type="button" className="btn btn-outlineprimary" onClick={btn2}>Reset</button>
                </div>

            </div>


        )

    }



  
    