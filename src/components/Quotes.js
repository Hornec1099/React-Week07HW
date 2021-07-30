import React from 'react';

const Quotes = ({quotes}) => {

    if (quotes === false){
        return null
    }
    

    return(
        <div>
        <h3> Here are All the Quotes</h3>
        <ul>
        {quotes.map((quote,index) => {
            return (
                <li key ={index}>
                    <h4> Anime : {quote.anime} </h4>
                    <p> Character : {quote.character}</p>
                    <p> Quote : "{quote.quote}"</p>
                </li>
            )
        })};
        </ul>
        </div>
    )

}

export default Quotes