import { Link } from "react-router-dom";
function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      <p>You are logged in. JWT is present.</p>
       <Link to="/tasks">Go to Tasks</Link>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
