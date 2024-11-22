// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext.jsx";
import Loginpage from "./pages/login";
import Prototipo from "./pages/prototipo.jsx";
import Index from "./pages/index.jsx";
import SobreNosotros  from "./pages/SobreNosotros.jsx";
import Contactanos from "./pages/contactanos.jsx";
import Principal from "./pages/principal.jsx";

import ProtectedRoute from "./protectedRoute.jsx";
import { MessageProvider } from "./context/MessageContext.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MessageProvider>
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="/Prototipo" element={<Prototipo />}></Route>
            <Route path="/SobreNosotros" element={<SobreNosotros />}></Route>
            <Route path="/Contactanos" element={<Contactanos />}></Route>

            <Route path="/login" element={<Loginpage />}></Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/Principal" element={<Principal />}></Route>
            </Route>
          </Routes>
        </MessageProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
