import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './TitleCards.css'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
}

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([])
  const cardsRef = useRef(null)

  useEffect(() => {
    const el = cardsRef.current
    const handleWheel = (event) => {
      event.preventDefault()
      el.scrollLeft += event.deltaY
    }
    el.addEventListener('wheel', handleWheel)
    return () => el.removeEventListener('wheel', handleWheel)
  }, [])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category || 'now_playing'}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results || []))
      .catch((err) => console.error(err))
  }, [category])

  return (
    <div className="title-cards">
      <h2>{title || 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData
          .filter((card) => card.backdrop_path)
          .map((card) => (
            <Link to={`/player/${card.id}`} className="card" key={card.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                alt={card.original_title}
              />
              <p>{card.original_title}</p>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default TitleCards