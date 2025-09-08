import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router";

const GoogleLoginBtn = () => {
    const {loginWithGoogle,setUser} = useContext(AuthContext);
     const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
  loginWithGoogle()
    .then(result => {
      setUser(result.user);
      navigate(from, { replace: true });  
    })
    .catch(err => console.log(err));
};

  return (
    <button
    onClick={handleGoogleLogin}
      type="button"
      className="cursor-pointer w-[300px] flex items-center justify-center gap-3 py-3 rounded-lg border border-gray-600 bg-[#181818] text-white font-semibold hover:bg-gray-800 transition"
    >
      <FcGoogle className="text-2xl" />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleLoginBtn;
