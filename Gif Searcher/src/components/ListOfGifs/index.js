import React from 'react'
import Gif from '../Gif';
import './ListOfGifs.css'

export default function ListOfGifs({list}){

 return <div className='ListOfGifs'>
    {list.map(({title, id, url}) =>
        <Gif
          key = {id}
          title = {title}
          id = {id} 
          url = {url}
        />
      )
    }
    </div>
}