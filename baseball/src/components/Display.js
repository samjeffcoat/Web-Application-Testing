import React, {Component} from "react";

class Display extends Component{
    render(){
        return(
            <div>
                <h1>Nationals Park</h1>
                <h3>Anthony Rendon at Bat</h3>
                <ul>
                    <li>Balls: {balls}
                    </li>
                    <li>Strikes :{strikes}
                    </li>
                </ul>

            </div>
        )
    }

}

export default Display