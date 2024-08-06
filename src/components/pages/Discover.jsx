import Banner from "../atoms/Banner";
import Ciak from "../atoms/icons/Ciak";
import Tv from "../atoms/icons/Tv";
import SearchBar from "../atoms/SearchBar";
import { labels } from "../data/labels";
import Card from "../molecules/Card";
import { enumEndpoints } from "../data/endpointsEnum";
import { WatchlistProvider } from "../context/WatchListContext";

function Discover() {
  return (
    <WatchlistProvider>
      <div className="w-full bg-gray-50">
        <div className="w-4/5 bg-white mx-auto px-4">
          <SearchBar />

          <Banner className="my-3">{labels.forYouSeries}</Banner>
          <Card
            endpoint={enumEndpoints.GET_SIMILAR_SERIES}
            mediaType="series"
          />

          <Banner className="my-3">{labels.recommendedSeries}</Banner>
          <Card
            endpoint={enumEndpoints.GET_RECOMMENDED_SERIES}
            mediaType="series"
          />

          {/*SFOGLIA SERIE TV*/}
          <Banner className="bg-yellow-400 rounded-md p-2 my-3">
            <div className="flex items-center gap-4">
              <Tv className="w-12 h-12 p-3 rounded-full bg-black flex items-center" />
              <div className="flex justify-between w-full">
                <span className="uppercase font-bold">
                  {labels.browseAllSeries}
                </span>
                <span>{labels.showMore}</span>
              </div>
            </div>
          </Banner>

          <Banner className="my-3">{labels.topMovies}</Banner>
          <Card endpoint={enumEndpoints.GET_POPULAR_MOVIES} mediaType="movie" />

          {/*SFOGLIA FILM*/}
          <Banner className="bg-yellow-400 rounded-md p-2 my-3">
            <div className="flex items-center gap-4">
              <Ciak className="w-12 h-12 p-3 rounded-full bg-black flex items-center" />
              <div className="flex justify-between w-full">
                <span className="uppercase font-bold">
                  {labels.browseAllMovies}
                </span>
                <span>{labels.showMore}</span>
              </div>
            </div>
          </Banner>
        </div>
      </div>
    </WatchlistProvider>
  );
}

export default Discover;
