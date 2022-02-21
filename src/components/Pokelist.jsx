import React ,{useEffect, useState} from 'react'
import axios from 'axios';
import {mainContext,useContext} from "../context"

const Pokelist = () => {
    const [pokemon,setPokemon]=useState([]);
    const {search} =useContext(mainContext);
    var pokemonlist =[]
    useEffect(async ()=>{
        for(var i=1 ;i<401;i++)
        {
           await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then( res =>pokemonlist.push(res));
        }
        setTimeout(()=>{setPokemon([...pokemonlist])},200);
    },[])
  return (
        <div className='cont'>
            {(pokemon??[]).map((res,idx)=>(
                search == "" ? (<div key={idx} className='pokecard'><img src={res.data.sprites.other.dream_world.front_default} alt="" /><h1 className='poke-name'>{res.data.name}</h1><p className='poke-text'>Type:{res.data.types[0].type.name}</p></div>) : (res.data.name.indexOf(search) !=-1 ? (<div key={idx} className='pokecard'><img src={res.data.sprites.other.dream_world.front_default} alt="" /><h1 className='poke-name'>{res.data.name}</h1><p className='poke-text'>Type:{res.data.types[0].type.name}</p></div>): "")
            ))}
        </div>
  )
}

export default Pokelist
