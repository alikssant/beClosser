import "./index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { ProtectedApp } from "App";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainBrowse } from "pages/MainBrowser/MainBrowser";
import { MainCreate } from "pages/MainCreate/MainCreate";
import { Main } from "pages/Main/Main";
import { PageNotFound } from "pages/PageNotFound/PageNotFound";
import { Signin } from "pages/Signin/Signin";
import { Signup } from "pages/Signup/Signup";
import { FirebaseApp } from "utils/firebase";
import { PersistGate } from "redux-persist/integration/react";

FirebaseApp.init();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<ProtectedApp />}>
              <Route path="/" element={<MainBrowse />} />
              <Route path="/note/:noteId" element={<Main />} />
              <Route path="/note/new" element={<MainCreate />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
