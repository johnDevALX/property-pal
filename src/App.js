import './index.css';
import AppBodyMid from "./components/AppBodyMid/AppBodyMid";
import AppBodyLayer1 from "./components/AppBodyLayer/AppBodyLayer1";
import AppBodyCard from "./components/AppBodyCard/AppBodyCard";
import AppBodyBelowCard from "./components/AppBodyBelowCard/AppBodyBelowCard";
import AppUpperFooter from "./components/AppUpperFooter/AppUpperFooter";
import AppLowerFooter from "./components/AppLowerFooter/AppLowerFooter";
import AppNavbar from "./components/AppNavbar/AppNavbar";

function App() {
  return (
    <div className="app" >
        <h1 >
            <AppNavbar/>
            <AppBodyMid/>
            <AppBodyLayer1/>
            <AppBodyCard/>
            <AppBodyBelowCard/>
            <AppUpperFooter/>
            <AppLowerFooter/>
        </h1>
    </div>
  );
}

export default App;
