import './index.css';
import HomePage from "./pages/HomePage/HomePage";
import SignInPage from "./pages/SignInPage/SignInPage";
import PartnersPage from "./pages/PartnersPage/PartnersPage";
import HelpPage from "./pages/HelpPage/HelpPage";

function App() {
  return (
    <div className="app" >
        <h1 >
            <SignInPage/>
            {/*<HomePage/>*/}
            {/*<PartnersPage/>*/}
            {/*<HelpPage/>*/}
        </h1>
    </div>
  );
}

export default App;
