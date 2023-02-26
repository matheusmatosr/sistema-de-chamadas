import { useContext } from "react";
import { AuthContext } from '../../contents/auth';
import Header from "../../components/Header";

function Dashboard() {
  const { signOut } = useContext(AuthContext);

  return (
    <div className="App">
      <Header />
      <h1>Tela de dashboard</h1>
      <button onClick={() => signOut() }>Logout</button>
    </div>
  );
}
  
export default Dashboard;