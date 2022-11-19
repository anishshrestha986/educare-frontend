import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthLayout from "./layouts/auth.layout";
import DashBoardLayout from "./layouts/dashboard.layout";
import LogIn from "./pages/auth/logIn";
import Register from "./pages/auth/register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Assignments from "./pages/Dashboard/Assignments";
import Chats from "./pages/Dashboard/Chats";
import Grades from "./pages/Dashboard/Grades";
import Settings from "./pages/Dashboard/Settings";
import Subjects from "./pages/Dashboard/Subjects";
import Home from "./pages/Home";
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Router>
          <Routes>
            <Route element={<AuthLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<LogIn />} />
            </Route>
            <Route element={<DashBoardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/assignments" element={<Assignments />} />
              <Route path="/grades" element={<Grades />} />
              <Route path="/chats" element={<Chats />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}
