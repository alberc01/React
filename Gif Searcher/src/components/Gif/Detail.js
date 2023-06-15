import React,{useContext} from "react";
import Gif from ".";
import GifsContext from "../../contexts/GifContexts";

export default function Detail({params}){
    const {list} = useContext(GifsContext)
    const gif = list.find(gf =>gf.id === params.id)
    return<>
        <h1>Gif con id: {params.id} </h1>
        <Gif url={gif.url} 
            title={gif.title}
        />
    </> 
}