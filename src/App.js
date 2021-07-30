import './App.css';
import QuotesContainer from './containers/QuoteContainer';

function App() {

  const animes = [
    {name: "Random" , url: "https://animechan.vercel.app/api/quotes"},
    {name: "Naruto" , url: "https://animechan.vercel.app/api/quotes/anime?title=naruto"},
    {name: "Bleach" , url: "https://animechan.vercel.app/api/quotes/anime?title=bleach"},
    {name: "One Piece" , url: "https://animechan.vercel.app/api/quotes/anime?title=piece"},
    {name: "Shingeki no Kyojin" , url: "https://animechan.vercel.app/api/quotes/anime?title=kyojin"}
  ]
    
  return (

    <QuotesContainer animes = {animes}/>
  );
}

export default App;
