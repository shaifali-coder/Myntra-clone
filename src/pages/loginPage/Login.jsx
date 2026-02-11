import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginBanner from "../../assets/login.png";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),

      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password is required"),
    }),

    onSubmit: async (values) => {
      setLoading(true);
      setApiError("");

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/auth/login`,
          values
        );

        console.log("Login response:", response.data);

      
        localStorage.setItem("token", response.data.token);

        alert("Login Successful");
      } catch (error) {
        console.error("Login error:", error);

        setApiError(
          error.response?.data?.message || "Invalid email or password"
        );
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="ln-wrapper">
      <div className="ln-card">
        <div className="ln-banner">
          <img src={loginBanner} alt="Login banner" />
        </div>

        <div className="ln-content">
          <h2 className="ln-heading">Login</h2>

          <form onSubmit={formik.handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="ln-input"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.email && formik.errors.email && (
              <p className="ln-error">{formik.errors.email}</p>
            )}

            <div className="ln-password-field">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="ln-input"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <span
                className="ln-eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {formik.touched.password && formik.errors.password && (
              <p className="ln-error">{formik.errors.password}</p>
            )}

            {apiError && <p className="ln-error">{apiError}</p>}

            <p className="ln-forgot">Forgot password?</p>

            <button
              type="submit"
              className="ln-login-btn"
              disabled={!formik.isValid || !formik.dirty || loading}
            >
              {loading ? "Logging in..." : "LOGIN"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;




















































// import React, { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import loginBanner from "../../assets/login.png";
// import "./Login.css";

// function Login() {
//   const [showPassword, setShowPassword] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },

//     validationSchema: Yup.object({
//       email: Yup.string()
//         .email("Enter a valid email")
//         .required("Email is required"),

//       password: Yup.string()
//         .min(6, "Minimum 6 characters")
//         .required("Password is required"),
//     }),

//     onSubmit: (values) => {
//       console.log("Login values:", values);
//       alert("Login Successful");
//     },
//   });

//   return (
//     <div className="ln-wrapper">
//       <div className="ln-card">

//         <div className="ln-banner">
//           <img src={loginBanner} alt="Login banner" />
//         </div>

//         <div className="ln-content">
//           <h2 className="ln-heading">Login</h2>

//           <form onSubmit={formik.handleSubmit}>

//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               className="ln-input"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.email && formik.errors.email && (
//               <p className="ln-error">{formik.errors.email}</p>
//             )}

//             <div className="ln-password-field">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Password"
//                 className="ln-input"
//                 value={formik.values.password}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />

//               <span
//                 className="ln-eye"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//             </div>

//             {formik.touched.password && formik.errors.password && (
//               <p className="ln-error">{formik.errors.password}</p>
//             )}

//             <p className="ln-forgot">Forgot password?</p>

//             <button
//               type="submit"
//               className="ln-login-btn"
//               disabled={!formik.isValid || !formik.dirty}
//             >
//               LOGIN
//             </button>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
