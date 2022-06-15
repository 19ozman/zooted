import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AnimalList } from "./components/pages/AnimalList";
import { AnimalSingle } from "./components/pages/AnimalSingle";
import { NotFound } from "./components/pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AnimalList />}></Route>
            <Route path="/animal/:id" element={<AnimalSingle />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
