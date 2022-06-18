import React, { useState, useEffect } from 'react'


export default function Swcall(){
    const [planets, setPlanets] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            await fetch('https://swapi.dev/api/planets/?format=json')
            .then(response => response.json())
            .then(data => setPlanets(data.results))
            setLoading(false)
        }
        fetchData()   
    }, [])

    console.log(planets.filter(planet => planet.name.toLowerCase().includes("ka")))

    // function planetLoop(){
    //     planets.map(planet => {
    //         return <li key={planet.name}>{planet.name}</li>
    //     })
    // }

    return(
        <div>
            <h2>The Planets!</h2>
            <p>{loading ? 'loading' : ''}</p>
            <ul>
            {planets.filter((planet) => 
                planet.name.toLowerCase().includes()
                ).map(planet => (
                <li key={planet.name}>{planet.name}</li>
            ))}
            </ul>
        </div>
    )
}


    