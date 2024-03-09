import ImportantSchedules from "../Mainpage/ImportantSchedules";
import DailyRoutines from "../Mainpage/DailyRoutines";
import Planned from "../Mainpage/Planned";
import Myfinances from "../Mainpage/Myfinances";
import MyInspirations from "../Mainpage/MyInspirations";
import Appheader from "../Mainpage/Appheader";
import AppNavigation from "../Mainpage/AppNavigation";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="app--mainpage">
      <Appheader />
      <BrowserRouter className="sub-pages">
        <AppNavigation>
          <Routes>
            <Route path="*" element={<DailyRoutines />} />
            <Route
              path="/ImportantSchedules"
              element={<ImportantSchedules />}
            />
            <Route path="/Planned" element={<Planned />} />
            <Route path="/MyInspirations" element={<MyInspirations />} />
            <Route path="/Myfinances" element={<Myfinances />} />
          </Routes>
        </AppNavigation>
      </BrowserRouter>
    </div>
  );
}
