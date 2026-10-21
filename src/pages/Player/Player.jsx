import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
}

const Player = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [video, setVideo] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then((res) => res.json())
      .then((res) => {
        const results = res.results || []
        const trailer =
          results.find((v) => v.site === 'YouTube' && v.type === 'Trailer') ||
          results.find((v) => v.site === 'YouTube')
        setVideo(trailer || null)
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="Back" onClick={() => navigate(-1)} />

      {loading && <p>Loading...</p>}
      {!loading && !video && <p>No trailer available for this movie.</p>}

      {video && (
        <>
          <iframe
            width="90%"
            height="90%"
            src={`https://www.youtube.com/embed/${video.key}?autoplay=1&mute=1`}
            title={video.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <div className="player-info">
            <p>{video.published_at?.slice(0, 10)}</p>
            <p>{video.name}</p>
            <p>{video.type}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Player