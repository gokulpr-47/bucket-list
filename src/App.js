import "./App.css";
import { Routes, Route } from "react-router-dom";
import BucketList from "./pages/BucketList";
import Bucket from "./pages/Bucket";
import NavbarComponent from "./components/reuse/NavbarComponent";
import NotFound from "./pages/NotFound";
import Editor from "./pages/Editor";
import Test from "./pages/Test";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import { PopProvider } from "./Context/PopContext";
import { AuthProvider } from "./Context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { EditingProvider } from "./Context/EditingContext";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <AuthProvider>
        <PopProvider>
          <EditingProvider>
            <ParallaxProvider>
              <NavbarComponent />
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
                />
                <Route path="/bucket">
                  <Route
                    index
                    element={
                      <ProtectedRoute>
                        <Bucket />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path=":id/list"
                    element={
                      <ProtectedRoute>
                        <BucketList />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path=":id/list/:id/editor"
                    element={
                      <ProtectedRoute>
                        <Editor />
                      </ProtectedRoute>
                    }
                  />
                </Route>
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ParallaxProvider>
          </EditingProvider>
        </PopProvider>
      </AuthProvider>
    </>
  );
}

export default App;
