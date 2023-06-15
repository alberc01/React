import React,{useEffect, useState} from 'react';
import {ApiGifHook} from '../../hooks/ApiGifHook';
import ListOfGifs from '../ListOfGifs';
import './SearchBar.css'


export default function SearchBar(){
    const [searchInput, setInput] = useState("")
    const [keyword, setkword] = useState("")
    const {list} = ApiGifHook({keyword})
    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    };
    const handleSubmit= (evt) => {
        evt.preventDefault();
        setkword(searchInput);
    }
    
    return (
        <div className='content'>
            <form className='search'
                  onSubmit={handleSubmit}>
                <input type="text"
                      placeholder="Search for gifs here..."
                      onChange={handleChange}
                      value={searchInput} />  
                    <button>
                        Get Gifs
                    </button> 
            </form>
            <h4> Resultados de la Búsqueda</h4>
            <ListOfGifs list={list}/>
        </div>
        
    )
}


