import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({title, category}) => {
  const [apiData, setApiData] = useState([])
  const cardsRef = useRef();
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjJjZjEzYTYzNGU3YmNjNDQwODNhNTNkZTA3NzNjNyIsIm5iZiI6MTc5MjIwNjcwNy45MjQsInN1YiI6IjZhZDJlNzczOTQxNDcyODI3ZDBkNzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dj1l2D--78J7xa9U8FLSOMo9ikfas_NGnjjb6kJeuTA'
  }
};



  const handleWheel = (event) => {
    event.preventDefault()
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [])

  return (
    <div className="title-cards">

      <h2>Popular on Netflix</h2>

      <div className="card-list" ref={cardsRef}>

        {apiData.map((card, index) => (
            <div className="card" key={index}>
              <img src={'https://image.tmdb.org/t/p/w500' + card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </div>
          
        
        ))}

      </div>

    </div>
  )
}

export default TitleCards