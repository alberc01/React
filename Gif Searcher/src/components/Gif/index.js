import React from 'react'
import './Gif.css'
import {Link, Route} from 'wouter';

export default function Gif({id, title, url}){
  
    return (
      <div className='Gif'>
          <Link to ={`/gif/${id}`} className='Gif-Link'>
          <h4>{title}</h4>
          <img alt={title} src={url}/>  
        </Link>
      </div>
    )
}