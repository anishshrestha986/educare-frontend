import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import LogIn from "./pages/auth/logIn";
import Register from "./pages/auth/register";
import Home from "./pages/Home";
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logIn" element={<LogIn />} />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}
