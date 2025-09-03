

import { useState, useEffect } from "react";
import api from "../apisetup/api";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("PATIENT");
  const [error, setError] = useState("");
  // navigation
  const navigate = useNavigate();

  // Submit Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", {
        email,
        password,
        role,
      });
      const token = response.data.token;
      const user =response.data.user
      
      localStorage.setItem("user",
        JSON.stringify({
          token, role,
          name:user?.name||"",
          email:user?.email||""
        })

      );
     if (role === "PATIENT" ) {
      navigate("/patient/Dashboard")
     }else if (role === "DOCTOR") {
      navigate("/doctor/Dashboard")
     }
    } catch (err) {
      setError("Login failed: Invalid");
      console.error(err);
    }
  };
  // Error Message clear Function
  useEffect(() => {
    if (!error) return;
    const timeout = setTimeout(() => setError(""), 5000);
    return () => clearTimeout(timeout);
  }, [error]);

  return (
    <>
      <section className="bg-transparent">
        <div className="max-w-[350px] mx-auto px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl pb-6 text-black font-normal text-center">
            Login to Your Account
          </h1>
          <form
            onSubmit={handleSubmit}
            className="shadow bg-transparent border rounded border-black/10 grid space-y-6 p-8 justify-center"
          >
            <input
              type="email"
              placeholder="Type Your Mail"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className=" w-full h-10 px-4 border border-black/40 rounded-md"
            />
            <input
              type="password"
              placeholder="Type Your Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-10 px-4 border border-black/40 rounded-md"
            />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border border-black/40 rounded"
            >
              <option value="PATIENT">PATIENT</option>
              <option value="DOCTOR">DOCTOR</option>
            </select>
            <motion.button
              type="submit"
              whileTap={{scale:0.95}}
              className="bg-blue-400 text-white w-[110px] h-[45px] font-semibold rounded-lg cursor-pointer mx-auto"
            >
              Submit
            </motion.button>
             {error && <p className="text-center text-red-500">{error}</p>}
              <motion.button whileTap={{scale:0.95}} type="button" onClick={()=>navigate("/register")} className="w-[192px] h-[48px] bg-green-500 text-white rounded font-semibold cursor-pointer mx-auto">Create new account</motion.button>
          </form> 
         
        </div>
      </section>
    </>
  );
};

export default Login;
