import {useContext, useEffect, useState} from 'react'
import GetGifs from '../services/getgifs';
import GifsContext from '../contexts/GifContexts';

export function ApiGifHook({ keyword } = { keyword: null }){
    // const [list, setGifs] = useState([]]);
    const {list, setGifs} = useContext(GifsContext);

    useEffect(function () {
        const keyWordUsed = keyword || localStorage.getItem('lastKword')
        GetGifs({keyword:keyWordUsed})
            .then(giflist =>{
                setGifs(giflist)
                localStorage.setItem('lastKword',keyword)
            })
    },[keyword,setGifs])

    return {list}
}