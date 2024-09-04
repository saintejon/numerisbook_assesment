import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Invoice from "./pages/Invoice";
import NotFound from "./pages/NotFound";

function App() {
      return (
            <div className="App trial-font text-sm transition-all text-slate-800">
                  <BrowserRouter>
                        <Routes>
                              <Route path="/" element={<DashboardLayout />}>
                                    <Route index element={<Invoice />} />
                                    <Route
                                          path="invoice"
                                          element={<Invoice />}
                                    />
                                    <Route path="*" element={<NotFound />} />
                              </Route>
                        </Routes>
                  </BrowserRouter>
            </div>
      );
}

export default App;
