import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginBanner from "../../assets/signup.jpg";
import "./Signup.css";
import google from "../../assets/google.jpg"
import { useNavigate } from "react-router-dom";
import signInWithGoogle from "../../firebase/GoogleAuth";



function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [apiError, setApiError] = useState("");
 const navigate = useNavigate();

  

  

  const isMobile = (value = "") => /^[6-9]\d{9}$/.test(value);

  


  const formik = useFormik({
    initialValues: {
      name: "",
      user: "",
      password: "",
    },




    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Please enter your name"),

      user: Yup.string()
        .required("Please enter email or mobile number")
        .test(
          "email-or-phone",
          "Enter valid email or mobile number",
          (value) =>
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value || "") ||
            /^[6-9]\d{9}$/.test(value || "")
        ),

      password: Yup.string().required("Enter password"),
    }),

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setApiError("");

       const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/signup`,
          {
            name: values.name,
            email: values.user,
            password: values.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Signup Success:", response.data);

     
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
        }

        alert("Signup Successful ");
        resetForm();
        setChecked(false);

      } catch (error) {
        console.error(error);
        setApiError(
          error.response?.data?.message || "Signup failed. Try again."
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="myntra-wrapper">
      <div className="myntra-login-card">
        <div className="myntra-banner">
          <img src={loginBanner} alt="banner" />
        </div>

        <div className="myntra-content">
          <h2 className="login-heading">
            Signup
          </h2>

 <button
              type="button"
              className="google-btn"
              onClick={signInWithGoogle}
            >
              <img src={google} alt="google" />
              Continue with Google
            </button> 

      




          <form onSubmit={formik.handleSubmit}>
          
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="error">{formik.errors.name}</p>
            )}

            <input
              type="text"
              name="user"
              placeholder="Email or Mobile Number"
              value={formik.values.user}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.user && formik.errors.user && (
              <p className="error">{formik.errors.user}</p>
            )}

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {formik.touched.password && formik.errors.password && (
              <p className="error">{formik.errors.password}</p>
            )}

            {isMobile(formik.values.user) && (
              <p className="otp-link">Login using OTP</p>
            )}

        
            <div className="terms-container">
              <input
                type="checkbox"
                id="terms"
                className="terms-checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <label htmlFor="terms" className="terms-text">
                By continuing, I agree to the
               
                     <span>
      <a href="https://www.myntra.com/termsofuse"> Terms of Use </a>
      </span> &{" "}
          

          <span>
      <a href="https://www.myntra.com/privacypolicy"> Privacy Policy </a>
      </span>
                and I am 18 years old.
              </label>
            </div>

            {apiError && <p className="error">{apiError}</p>}

            
          
            <button
  type="submit"
  disabled={!formik.isValid || !formik.dirty || !checked}
 
>
  CONTINUE
</button> 

    <div className="already-account">
  Already have an account?{" "}
  <span
    className="login-already"
    onClick={() => navigate("/login")}
  >
    Login
  </span>
</div>


            <p className="help-text">
              Have trouble logging in? 
          <span>
      <a href="http://localhost:5173/login"> Get help </a>
      </span>
            </p>

     

              

            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;








