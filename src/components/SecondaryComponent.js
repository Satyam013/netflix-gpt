import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryComponent = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-60 pl-10 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryComponent;
