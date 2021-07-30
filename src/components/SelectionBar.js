import React from 'react'


const SelectionBar = ({selectionHandled, animes}) => {

    const options = animes.map((anime) => {

        return <option name = {anime.name} value = {anime.url} > {anime.name} </option>
        
    });

    return (
        <div>
        <h3> The is where you select the Anime</h3>
        <select onChange = {selectionHandled}>
            <option value = "" disabled placeholder="Choose An Anime"> Choose An Anime</option>
            {options}
        </select>  
        </div>
    )
}

export default SelectionBar