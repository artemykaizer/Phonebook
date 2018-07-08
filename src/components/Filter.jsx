import React from 'react';
import GenderFilter from './GenderFilter'
import SearchInput from './SearchInput'
import LettersBar from './LettersBar'
import Sorting from './Sorting'
import ShowSavedButton from './ShowSavedButton'

function Filter () {
    return (
        <div>
            <SearchInput/>
            <Sorting/> 
            <GenderFilter/>
            <LettersBar/>
            <ShowSavedButton/>
        </div>
    )
}

export default Filter