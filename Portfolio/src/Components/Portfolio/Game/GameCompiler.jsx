
import MR_Desc from "./MathRain/NumberRain.jsx";
import DD_Desc from "./Dumby/DDDesc.jsx";
import MR_Learn from "./MathRain/MR_Learn.jsx";
import DD_Learn from "./Dumby/DD_Learn.jsx";
import SP_Learn from "./ShatteredPeak/SP_Learn.jsx";
import SP_Desc from "./ShatteredPeak/SP_Desc.jsx";



const GameCompiler = [
    { gameId:1 , gameName: "Math Rain" ,gameTeam:"1 Member", gameTime:"3 Weeks", gameVideo: "/src/assets/video/NumberRain.mp4", gameDescription:<MR_Desc /> , gameLearning:<MR_Learn onKeywordClick={() => {}} />},
    { gameId:2 , gameName:"Dumby Dumblings",gameTeam:"6 Members", gameTime:"3 Months",  gameForm: "https://orbeetalstudios.github.io/BuildForPortfolioSite/", gameDescription:<DD_Desc />,gameLearning:<DD_Learn onKeywordClick={() => {}} />},
    { gameId:3 , gameName:"The Shattered Peak",gameTeam:"12 Members", gameTime:"3 Months", gameVideo: "/src/assets/video/TheShatteredPeak Trailer.mp4", gameDescription:<SP_Desc /> ,gameLearning:<SP_Learn onKeywordClick={() => {}} />},

    // Aggiungi altri giochi da compilare
];


export default GameCompiler;
