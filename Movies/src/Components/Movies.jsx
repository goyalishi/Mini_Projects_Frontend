import Card from './Card.jsx';
import React, { useState } from 'react';
function Movies(){
    
    
    const [inpVal, setInpVal] = useState('');
    const [data, setData] = useState([]);

    function removeMovie(id){
        const newData=data.filter((movie)=>movie.id!==id);
        setData(newData);
    }

    function titleHandler(e){
        setInpVal(e.target.value);
    }

    async function fetchData() {
        try {
            const response = await fetch(`https://imdb.iamidiotareyoutoo.com/justwatch?q=${inpVal}`);
            const result = await response.json();
            setData(result.description);
            console.log(result.description);
            console.log(result);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    return(
        <div className="flex flex-col gap-[3rem] items-center bg-slate-200">
            <div className="flex mx-auto gap-[1rem]">
                <input type="text" id="inp" onChange={titleHandler} placeholder="Search for movies" className='p-2 w-auto rounded border-black border-2'></input>
                <button id="btn" onClick={fetchData} className='bg-black text-white p-2 rounded-lg'>Search</button>
            </div>
            <div id='container' className="flex flex-wrap gap-[2rem] w-[90vw] justify-center ">
                {
                data.map((movie) => {
                     let imgUrl = movie.photo_url[0];
                     let title=movie.title;
                     return <Card img={imgUrl} titl={title} removeFunc={removeMovie} movie={movie}></Card>
                })
            }
                
            </div>
           
        </div>
    )
}

export default Movies;

