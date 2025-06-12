import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainComponent />
      <SecondaryComponent />
      {/*
          MainContainer
            - VideoBackground
            - VideoTitle
          SecondaryContainer
            - MovieList * n
              - cards * n
      */}
    </div>
  );
};

export default Browse;
