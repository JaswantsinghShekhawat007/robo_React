import React from 'react';

const Card = (props) => {
    return (
        <React.Fragment>
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-S'>
                <img alt='robots' src={`https://robohash.org/${props.username}?200*200`}/>
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.email}</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Card;