import { Link } from "react-router-dom";
import "./Login.css"

const Login = () => {
  return (
    <div className="login">
      <Link to="/genres">
        <p >Login</p>
        
      </Link>
    </div>
  );
};

export default Login;
