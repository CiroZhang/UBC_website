
import About from "./about_page/about.js"
import Contacts from "./contact_page/contact.js"
import ExpertsPage from './expert_page/expert.js';
import RoutineServices from './routine_page/routine.js';
import Rapid from './rapid_page/rapid.js';


function App() {
  return (
    <>
      <About/>
      <Rapid />
      <ExpertsPage />
      <RoutineServices />
      <Contacts/>
    </>

  );
}

export default App;
