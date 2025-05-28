

// import { useState, type FormEvent } from "react"
// import { Container, Row, Col, Form, Button } from "react-bootstrap"
// import { FaGoogle, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"
// import "bootstrap/dist/css/bootstrap.min.css"

// export default function SignInForm() {
//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")
//   const [keepSignedIn, setKeepSignedIn] = useState(false)
//   const [passwordError, setPasswordError] = useState("")
//   const [validated, setValidated] = useState(false)

//   const validatePassword = (password: string) => {
//     const minLength = password.length >= 8
//     const hasCapital = /[A-Z]/.test(password)
//     const hasNumber = /[0-9]/.test(password)
//     const hasSymbol = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)

//     if (!minLength || !hasCapital || !hasNumber || !hasSymbol) {
//       let errorMsg = "Password must contain at least:"
//       if (!minLength) errorMsg += " 8 characters,"
//       if (!hasCapital) errorMsg += " 1 capital letter,"
//       if (!hasNumber) errorMsg += " 1 number,"
//       if (!hasSymbol) errorMsg += " 1 symbol,"

//       // Remove trailing comma and add period
//       errorMsg = errorMsg.slice(0, -1) + "."
//       setPasswordError(errorMsg)
//       return false
//     }

//     setPasswordError("")
//     return true
//   }

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault()

//     const form = e.currentTarget as HTMLFormElement
//     const isPasswordValid = validatePassword(password)

//     if (!form.checkValidity() || !isPasswordValid) {
//       e.stopPropagation()
//       setValidated(true)
//       return
//     }

//     // Form is valid, proceed with submission
//     console.log("Form submitted:", { username, password, keepSignedIn })
//   }

//   return (
//     <Container fluid className="min-vh-100 bg-light">
//       <Row className="min-vh-100">
//         {/* Left side - Sign in form */}
//         <Col lg={6} className="d-flex align-items-center justify-content-center">
//           <div className="w-100" style={{ maxWidth: "450px", padding: "0 20px" }}>
//             <h1 className="mb-2 fw-bold">Sign In</h1>
//             <p className="mb-4">
//               New user?{" "}
//               <a href="#" className="text-primary text-decoration-none">
//                 Create an account
//               </a>
//             </p>

//             <Form noValidate validated={validated} onSubmit={handleSubmit}>
//               <Form.Group className="mb-3" controlId="username">
//                 <Form.Control
//                   type="text"
//                   placeholder="Username or email"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   required
//                   style={{ height: "48px" }}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="password">
//                 <Form.Control
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => {
//                     setPassword(e.target.value)
//                     if (validated) validatePassword(e.target.value)
//                   }}
//                   required
//                   isInvalid={!!passwordError}
//                   style={{ height: "48px" }}
//                 />
//                 <Form.Control.Feedback type="invalid">{passwordError}</Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group className="mb-4" controlId="keepSignedIn">
//                 <Form.Check
//                   type="checkbox"
//                   label="Keep me signed in"
//                   checked={keepSignedIn}
//                   onChange={(e) => setKeepSignedIn(e.target.checked)}
//                 />
//               </Form.Group>

//               <Button variant="dark" type="submit" className="w-100 mb-4" style={{ height: "48px" }}>
//                 Sign In
//               </Button>

//               <div className="position-relative text-center mb-4">
//                 <hr />
//                 <span
//                   className="position-absolute top-50 translate-middle bg-light px-3 text-muted"
//                   style={{ fontSize: "0.8rem" }}
//                 >
//                   Or Sign In With
//                 </span>
//               </div>

//               <div className="d-flex justify-content-center gap-3">
//                 {[
//                   { icon: <FaGoogle />, label: "Google" },
//                   { icon: <FaFacebook />, label: "Facebook" },
//                   { icon: <FaLinkedin />, label: "LinkedIn" },
//                   { icon: <FaTwitter />, label: "Twitter" },
//                 ].map((social, index) => (
//                   <Button
//                     key={index}
//                     variant="outline-secondary"
//                     className="rounded-circle"
//                     style={{ width: "48px", height: "48px" }}
//                     aria-label={`Sign in with ${social.label}`}
//                   >
//                     {social.icon}
//                   </Button>
//                 ))}
//               </div>
//             </Form>
//           </div>
//         </Col>

//         {/* Right side - Decorative graphics */}
//         <Col lg={6} className="d-none d-lg-flex align-items-center justify-content-center position-relative">
//           {/* Key icon */}
//           <div className="position-absolute" style={{ top: "80px", right: "120px" }}>
//             <svg width="80" height="80" viewBox="0 0 100 100" style={{ fill: "#444" }}>
//               <path d="M70 30c0-11.046-8.954-20-20-20s-20 8.954-20 20c0 8.837 5.731 16.347 13.685 19.002L40 65h5v10h10V65h5l-3.685-15.998C64.269 46.347 70 38.837 70 30zM50 40c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z" />
//             </svg>
//           </div>

//           {/* Abstract shapes */}
//           <div className="position-absolute" style={{ top: "160px", right: "80px" }}>
//             <svg width="60" height="40" viewBox="0 0 60 40" style={{ fill: "#444" }}>
//               <path d="M10 20c0-5.523 4.477-10 10-10h20c5.523 0 10 4.477 10 10s-4.477 10-10 10H20c-5.523 0-10-4.477-10-10z" />
//               <circle cx="45" cy="30" r="8" />
//             </svg>
//           </div>

//           {/* Walking person silhouette */}
//           <div className="position-absolute" style={{ bottom: "120px", right: "60px" }}>
//             <svg width="120" height="160" viewBox="0 0 120 160" style={{ fill: "#444" }}>
//               {/* Head */}
//               <circle cx="60" cy="20" r="15" />
//               {/* Body */}
//               <rect x="45" y="35" width="30" height="50" rx="5" />
//               {/* Left arm */}
//               <rect x="25" y="40" width="25" height="8" rx="4" transform="rotate(-20 37.5 44)" />
//               {/* Right arm */}
//               <rect x="70" y="40" width="25" height="8" rx="4" transform="rotate(20 82.5 44)" />
//               {/* Left leg */}
//               <rect x="40" y="85" width="12" height="40" rx="6" transform="rotate(15 46 105)" />
//               {/* Right leg */}
//               <rect x="68" y="85" width="12" height="40" rx="6" transform="rotate(-15 74 105)" />
//               {/* Left foot */}
//               <ellipse cx="35" cy="135" rx="8" ry="4" transform="rotate(-10 35 135)" />
//               {/* Right foot */}
//               <ellipse cx="85" cy="135" rx="8" ry="4" transform="rotate(10 85 135)" />
//             </svg>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   )
// }


"use client"

import { useState, type FormEvent } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import GoogleIcon from "@mui/icons-material/Google"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import "bootstrap/dist/css/bootstrap.min.css"
import MyImage from '../signformimage.png';
import Home from "./home"

export default function SignInForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [keepSignedIn, setKeepSignedIn] = useState(false)
    const [passwordError, setPasswordError] = useState("")
    const [validated, setValidated] = useState(false)
    const [homepage, setHomePage] = useState(false)


    const validatePassword = (password: string) => {
        const minLength = password.length >= 8
        const hasCapital = /[A-Z]/.test(password)
        const hasNumber = /[0-9]/.test(password)
        const hasSymbol = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)

        if (!minLength || !hasCapital || !hasNumber || !hasSymbol) {
            let errorMsg = "Password must contain at least:"
            if (!minLength) errorMsg += " 8 characters,"
            if (!hasCapital) errorMsg += " 1 capital letter,"
            if (!hasNumber) errorMsg += " 1 number,"
            if (!hasSymbol) errorMsg += " 1 symbol,"

            // Remove trailing comma and add period
            errorMsg = errorMsg.slice(0, -1) + "."
            setPasswordError(errorMsg)
            return false
        }

        setPasswordError("")
        return true
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const form = e.currentTarget as HTMLFormElement
        const isPasswordValid = validatePassword(password)

        if (!form.checkValidity() || !isPasswordValid) {
            e.stopPropagation()
            setValidated(true)
            return
        }

        // Form is valid, proceed with submission
        console.log("Form submitted:", { username, password, keepSignedIn })
        setHomePage(true)
    }

    return (
        <Container fluid className="min-vh-100 bg-white">
            {!homepage ?
                <Row className="min-vh-100">
                    {/* Left side - Sign in form */}
                    <Col lg={6} className="d-flex align-items-center justify-content-center">
                        <div className="w-100" style={{ maxWidth: "450px", padding: "0 20px" }}>
                            <h1 className="mb-2 fw-bold">Sign In</h1>
                            <p className="mb-4">
                                New user?{" "}
                                <a href="#" className="text-primary text-decoration-none">
                                    Create an account
                                </a>
                            </p>

                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="username">
                                    <Form.Control
                                        type="text"
                                        placeholder="Username or email"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                        style={{ height: "48px" }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                            if (validated) validatePassword(e.target.value)
                                        }}
                                        required
                                        isInvalid={!!passwordError}
                                        style={{ height: "48px" }}
                                    />
                                    <Form.Control.Feedback type="invalid">{passwordError}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="keepSignedIn">
                                    <Form.Check
                                        type="checkbox"
                                        label="Keep me signed in"
                                        checked={keepSignedIn}
                                        onChange={(e) => setKeepSignedIn(e.target.checked)}
                                    />
                                </Form.Group>

                                <Button variant="dark" type="submit" className="w-100 mb-4" style={{ height: "48px" }}>
                                    Sign In
                                </Button>

                                <div className="position-relative text-center mb-4">
                                    <hr />
                                    <span
                                        className="position-absolute top-50 translate-middle bg-light px-3 text-muted"
                                        style={{ fontSize: "0.8rem" }}
                                    >
                                        Or Sign In With
                                    </span>
                                </div>

                                <div className="d-flex justify-content-center gap-3">
                                    {[
                                        { icon: <GoogleIcon />, label: "Google", color: "#db4437" },
                                        { icon: <FacebookIcon />, label: "Facebook", color: "#4267B2" },
                                        { icon: <LinkedInIcon />, label: "LinkedIn", color: "#0077b5" },
                                        { icon: <TwitterIcon />, label: "Twitter", color: "#1da1f2" },
                                    ].map((social, index) => (
                                        <Button
                                            key={index}
                                            variant="outline-secondary"
                                            className="rounded-circle d-flex align-items-center justify-content-center"
                                            style={{
                                                width: "48px",
                                                height: "48px",
                                                color: social.color,
                                                borderColor: "#dee2e6",
                                            }}
                                            aria-label={`Sign in with ${social.label}`}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = social.color
                                                e.currentTarget.style.color = "white"
                                                e.currentTarget.style.borderColor = social.color
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = "transparent"
                                                e.currentTarget.style.color = social.color
                                                e.currentTarget.style.borderColor = "#dee2e6"
                                            }}
                                        >
                                            {social.icon}
                                        </Button>
                                    ))}
                                </div>
                            </Form>
                        </div>
                    </Col>

                    {/* Right side - Decorative graphics */}
                    <Col lg={6} className="d-none d-lg-flex align-items-center justify-content-center position-relative">
                        {/* Key icon */}
                        <div className="position-absolute" style={{ top: "80px", right: "120px" }}>
                            <svg width="80" height="80" viewBox="0 0 100 100" style={{ fill: "#444" }}>
                                <path d="M70 30c0-11.046-8.954-20-20-20s-20 8.954-20 20c0 8.837 5.731 16.347 13.685 19.002L40 65h5v10h10V65h5l-3.685-15.998C64.269 46.347 70 38.837 70 30zM50 40c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z" />
                            </svg>
                        </div>

                        {/* Abstract shapes */}
                        <div className="position-absolute" style={{ top: "160px", right: "80px" }}>
                            <svg width="60" height="40" viewBox="0 0 60 40" style={{ fill: "#444" }}>
                                <path d="M10 20c0-5.523 4.477-10 10-10h20c5.523 0 10 4.477 10 10s-4.477 10-10 10H20c-5.523 0-10-4.477-10-10z" />
                                <circle cx="45" cy="30" r="8" />
                            </svg>
                        </div>

                        {/* Walking person silhouette */}
                        <div className="position-absolute">
                            <img src={MyImage} alt="My Image" />
                        </div>
                    </Col>
                </Row>
                :  <Home/>
                }
        </Container>
    )
}

