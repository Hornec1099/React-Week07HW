import React, { useEffect, useState } from 'react'
import Quotes from '../components/Quotes';
import SelectionBar from '../components/SelectionBar';

const QuotesContainer = ({animes}) => {

    const [quotes, setQuotes] = useState([]);

    useEffect (() => {
        loadQuotes(animes[0].url)
    },[animes])

    const loadQuotes = (url) => {
        fetch(url)
        .then(results => results.json())
        .then(quotesList => setQuotes(quotesList))
        .catch(err => console.err)
    }
    
     const handleSelection = (event) => {

        loadQuotes(event.target.value)

     }

    return (

        <section>
        <h1> Anime Quotes for all the Weebs</h1>
        <SelectionBar selectionHandled = {handleSelection} animes ={animes}/>

        <Quotes quotes={quotes} />
        </section>
    )
}

export default QuotesContainer