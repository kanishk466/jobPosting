// import { useState } from "react";

// export default function AuthForm() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({ email: "", password: "", name: "" });
//   const [message, setMessage] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage(null);

//     // Dummy request simulation
//     setTimeout(() => {
//       setMessage({ type: "success", text: isLogin ? "Logged in successfully!" : "Account created!" });
//     }, 1000);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center">{isLogin ? "Login" : "Signup"}</h2>

//         {message && (
//           <div className={`mt-4 p-2 text-center rounded-md ${message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
//             {message.text}
//           </div>
//         )}

//         <form className="mt-6" onSubmit={handleSubmit}>
//           {!isLogin && (
//             <div>
//               <label className="block font-medium">Name</label>
//               <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} className="w-full p-2 mt-1 border rounded-md" required />
//             </div>
//           )}

//           <div className="mt-4">
//             <label className="block font-medium">Email</label>
//             <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} className="w-full p-2 mt-1 border rounded-md" required />
//           </div>

//           <div className="mt-4">
//             <label className="block font-medium">Password</label>
//             <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} className="w-full p-2 mt-1 border rounded-md" required />
//           </div>

//           <button type="submit" className="mt-6 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
//             {isLogin ? "Login" : "Signup"}
//           </button>
//         </form>

//         <p className="mt-4 text-center text-gray-600">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//           <span className="text-blue-500 cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
//             {isLogin ? "Signup" : "Login"}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }





import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AuthForm({ setIsAuthenticated }) {

    
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState(null);


  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
  
    const endpoint = isLogin ? "https://job-backend-spwb.onrender.com/api/auth/login" : "https://job-backend-spwb.onrender.com/api/auth/register";
    
    console.log("Sending Data:", formData); // Debugging
    
    try {
      const response = await axios.post(endpoint, formData);
      const data = response.data;
  
      console.log("Response Data:", data); // Debugging
  
      if (isLogin) {
        if (data.token) {
          localStorage.removeItem("token"); // Ensure a fresh token is stored
          localStorage.setItem("token", data.token);
          setIsAuthenticated(true);
          navigate("/jobPost");
        } else {
          console.error("Token is missing in response!");
          setMessage({ type: "error", text: "Login failed. No token received." });
        }
      } else {
        setMessage({ type: "success", text: "Account created! Please log in." });
      }
    } catch (error) {
      console.error("Login/Register Error:", error);
      setMessage({ type: "error", text: error.response?.data?.message || "Something went wrong" });
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center">{isLogin ? "Login" : "Signup"}</h2>

        {message && (
          <div className={`mt-4 p-2 text-center rounded-md ${message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {message.text}
          </div>
        )}

        <form className="mt-6" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="block font-medium">Name</label>
              <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} className="w-full p-2 mt-1 border rounded-md" required />
            </div>
          )}

          <div className="mt-4">
            <label className="block font-medium">Email</label>
            <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} className="w-full p-2 mt-1 border rounded-md" required />
          </div>

          <div className="mt-4">
            <label className="block font-medium">Password</label>
            <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} className="w-full p-2 mt-1 border rounded-md" required />
          </div>

          <button type="submit" className="mt-6 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span className="text-blue-500 cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Signup" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
