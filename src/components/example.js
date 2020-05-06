import React from 'react';
import CountUp from 'react-countup';

class Exp extends React.Component{
render(){
    return(
        <CountUp
                                start={0}
                                end={353}
                                duration={2.75}
                                
                                onEnd={() => console.log('Ended! 👏')}
                                onStart={() => console.log('Started! 💨')}
                                >
                                {({ countUpRef, start }) => (
                                    <div>
                                    <span ref={countUpRef} />
                                    <button onClick={start}>Start</button>
                                    </div>
                                )}
        </CountUp>
    )
}
}
export default Exp;