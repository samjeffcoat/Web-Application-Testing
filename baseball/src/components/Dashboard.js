import React from 'react';

class Dashboard extends React.Component{
    render() {
        const {addBalls, addStrikes, addHit, addFoul}= this.props;
        return(
            <div>
                <h1> Scoreboard Operator</h1>
                <button onClick={addBalls}>Add Ball</button>
                <button onClick={addStrikes}>Add Strike</button>
                <button onClick={addHit}>Add Hit</button>
                <button onClick={addFoul}>Add Foul</button>

            </div>

        )
    }
}

export default Dashboard;