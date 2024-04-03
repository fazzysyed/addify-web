import logo from "./logo.svg";
import "./App.css";

import Medication from "./components/Medication/MedicationPage";
import First from "./components/First/First";
import Second from "./components/Second/Second";
import Thrird from "./components/Third/Third";
import Four from "./components/Four/Four";
import Five from "./components/Five/Five";
import Six from "./components/Six/Six";
import FirstQuestionnaire from "./components/FirstQuestion/FirstQuestion";
import SecondQuestionnaire from "./components/SecondQuestion/SecondQuestion";
import ThridQuestionnaire from "./components/ThirdQuestion/ThirdQuestion";
import FourthQuestionnaire from "./components/FourQuestion/FourQuestion";
import FiveQuestionnaire from "./components/FiveQuestion/FiveQuestion";
import SixQuestionnaire from "./components/SixQuestion/SixQuestion";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import ThirdQuestionnaire from "./components/FourQuestion/FourQuestion";
import Third from "./components/Third/Third";

function App() {
  return (
    <HashRouter>
      {/* <ScrollToTop /> */}

      <Routes>
        <Route path="/" element={<First />} />

        <Route path="/first-question" element={<FirstQuestionnaire />} />

        <Route path="/second" element={<Second />} />
        <Route path="/second-question" element={<SecondQuestionnaire />} />
        <Route path="/third" element={<Third />} />
        <Route path="/third-question" element={<ThirdQuestionnaire />} />

        <Route path="/four" element={<Four />} />
        <Route path="/four-question" element={<FourthQuestionnaire />} />

        <Route path="/five" element={<Five />} />
        <Route path="/five-question" element={<FiveQuestionnaire />} />
        <Route path="/six" element={<Six />} />
        <Route path="/six-question" element={<SixQuestionnaire />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
