import React from 'react'

export default function MoviesList(props) {

	return (
		<div id="container">
			{props.moviesProp.map(movie =>
			(
				<div key={movie._id} className="card">
					<h2>{movie.title}</h2>
					<p><ins>Directed by</ins>: {movie.director}</p>
					{movie.IMDBRating > 9 && <p><ins>Rating</ins> better than 9 🙀</p>}
					{movie.hasOscars ? <p>Oscar Winner 🏆</p> : <p>No Oscar 🙈</p>}
				</div>
			))}
		</div>
	)
}
