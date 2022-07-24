import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.page";
import Login from "./pages/Login.page";
import List from "./pages/List.page";
import Single from "./pages/Single.page";
import New from "./pages/New.page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="project">
              <Route index element={<List />} />
              <Route path=":projectId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
