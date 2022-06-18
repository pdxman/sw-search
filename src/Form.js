import React, { useState, useEffect  } from "react";

export default function Form(){
    const [term, setTerm] = useState('term')
    const [search, setSearch] = useState('')
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

    function handleTerm(event){
        setTerm(event.target.value)
    }

    function handleForm(event){
        event.preventDefault();
        setSearch(term)
    }

    return(
        <div>
            <h2>THE Form!</h2>
            <form onSubmit={handleForm}>
                <input 
                    placeholder="search"
                    onChange={handleTerm}
                />
                <button type="submit">Send!</button>
            </form>
              <p><strong>Input: </strong> {term}</p>
              <p><strong>Search Term: </strong>{search}</p>
              <h2>The Planets!</h2>
                <p>{loading ? 'loading' : ''}</p>
                <ul>
             {planets.filter((planet) => 
                planet.name.toLowerCase().includes(search)
                ).map(planet => (
                <li key={planet.name}>{planet.name}</li>
            ))}
            </ul>
        </div>
    )
}