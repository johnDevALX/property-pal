import './index.css';
import HomePage from "./pages/HomePage/HomePage";
import SignInPage from "./pages/SignInPage/SignInPage";
import PartnersPage from "./pages/PartnersPage/PartnersPage";
import HelpPage from "./pages/HelpPage/HelpPage";
import RentalPage from "./pages/RentalPage/RentalPage";

function App() {
  return (
    <div className="app" >
        <h1 >
            <RentalPage/>
            {/*<SignInPage/>*/}
            {/*<HomePage/>*/}
            {/*<PartnersPage/>*/}
            {/*<HelpPage/>*/}
        </h1>
    </div>
  );
}

export default App;
