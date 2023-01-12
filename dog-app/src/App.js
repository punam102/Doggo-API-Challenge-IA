import AllRoutes from "./Pages/AllRoutes";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div data-cy="dog-app">
     <Navbar/>
     {/* <AllRoutes/> */}
     <AllRoutes/>
    </div>
  );
}

export default App;
