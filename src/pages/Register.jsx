import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../apisetup/api";

const Register = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [specializationsList, setSpecializationsList] = useState([]);

  const navigate = useNavigate();

  // Fetch specialization 
  useEffect(() => {
    const fetchSpecializations = async () => {
      try {
        const res = await api.get("/specializations");
        if (res.data.success) {
          setSpecializationsList(res.data.data); 
        }
      } catch (err) {
        console.error("Specialization fetch error:", err);
      }
    };
    fetchSpecializations();
  }, []);

  // Validation function
  const validate = () => {
    if (!name.trim() || name.length < 3) {
      Swal.fire({ title: "Type your name (min 3 letters)!", icon: "error" });
      return false;
    }
    if (!role) {
      Swal.fire({ title: "Select your role!", icon: "error" });
      return false;
    }
    if (role === "DOCTOR" && !specialization) {
      Swal.fire({ title: "Select specialization!", icon: "error" });
      return false;
    }
    if (!email.includes("@")) {
      Swal.fire({ title: "Type a valid email!", icon: "error" });
      return false;
    }
    if (password.length < 6) {
      Swal.fire({
        title: "Password must be at least 6 characters!",
        icon: "error",
      });
      return false;
    }
    return true;
  };

  // Submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Api call 
    try {
      const endpoint =
        role === "DOCTOR" ? "/auth/register/doctor" : "/auth/register/patient";

      const body =
        role === "DOCTOR"
          ? { name, email, password, specialization, photo_url: photo }
          : { name, email, password, photo_url: photo };

      const res = await api.post(endpoint, body);

      if (res.data.success) {
        Swal.fire("Success!", "Registration completed.", "success").then(() => {
          navigate(role === "DOCTOR" ? "/doctor/dashboard" : "/patient/dashboard");
        });
      } else {
        Swal.fire("Error", res.data.message || "Registration failed!", "error");
      }
    } catch (err) {
      console.error("Registration error:", err);
      if (err.response && err.response.status === 409) {
        Swal.fire("Error", "Email already registered!", "error");
      } else {
        Swal.fire("Error", "Registration failed!", "error");
      }
    }
  };

  return (
    <section>
      <div className="mx-auto w-full">
        <h1 className="text-black text-center font-bold text-lg md:text-2xl pb-10">
          Create New Account
        </h1>
        <form
          className="grid space-y-4 p-4 w-[90%] sm:w-[380px] md:w-[500px] lg:w-[600px] mx-auto"
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-[90%] border p-2 outline-0 rounded-xs"
            placeholder="Type Your Name"
          />

          {/* Role */}
          <select
            className="border w-[90%] rounded-xs p-2 outline-0"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option hidden>select one</option>
            <option value="PATIENT">Patient</option>
            <option value="DOCTOR">Doctor</option>
          </select>

          {/* Doctor specialization */}
          {role === "DOCTOR" && (
            <select
              className="border border-black/60 rounded-xs p-2 outline-0 w-[90%]"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            >
              <option hidden>Select Specialization</option>
              {specializationsList.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          )}

          {/* Email */}
          <input
            type="email"
            value={email}
            placeholder="Type Your Email"
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 outline-0 rounded-xs border border-black/60 w-[90%]"
          />

          {/* Password */}
          <input
            type="password"
            value={password}
            placeholder="Type Your Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-[90%] border border-black/60 rounded-xs p-2 outline-0"
          />

          {/* Photo URL */}
          <input
            type="text"
            placeholder="Upload your photo (optional)"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="w-[90%] rounded border border-black/60 outline-0 p-2"
          />

          {/* Submit */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="font-bold text-white bg-black cursor-pointer w-[120px] h-[40px] rounded-2xl mx-auto"
          >
            Submit
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Register;
