import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AnimalList } from "./components/pages/AnimalList";
import { AnimalSingle } from "./components/pages/AnimalSingle";
import { NotFound } from "./components/pages/NotFound";
import { IZooContext, ZooContext } from "./contexts/ZooContext";

function App() {
  const [zooData, setZooData] = useState<IZooContext>({
    animals: [],
    updateContext: updateContext,
  });

  function updateContext(updatedContext: IZooContext): void {
    setZooData({ ...updatedContext });
  }

  return (
    <>
      <ZooContext.Provider value={zooData}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<AnimalList />}></Route>
              <Route path="/animal/:id" element={<AnimalSingle />}></Route>
              <Route path="*" element={<NotFound />}></Route>
              <Route path="/*" element={<NotFound />}></Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ZooContext.Provider>
    </>
  );
}

export default App;
