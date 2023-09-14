import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

function App() {
  const basename = import.meta.env.BASE_URL;

  return (
    <>
      <BrowserRouter basename={basename}>
        {/*Navbar*/}
          <Routes>
            <Route element={<h1>This is home</h1> } path="/" />
            <Route element={<h1>This is calendar</h1> } path="/calendar" />
            <Route element={<h1>This is reservations</h1> } path="/reservations" />
            <Route element={<h1>This is packages</h1> } path="/packages" />
            <Route element={<h1>This is profile</h1> } path="/profile/:id" />
            <Route element={<h1>This is login</h1> } path="/login" />
            <Route element={<h1>This is history</h1> } path="/history" />
            <Route element={<h1>This is payments</h1> } path="/payments" />
            <Route element={<h1>This is documents</h1> } path="/documents" />
          </Routes>
        {/*Footer*/}
      </BrowserRouter>
    </>
  )
}

export default App
