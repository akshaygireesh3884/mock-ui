
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

    setHomePage(true)
  }

  return (
    <Container fluid className="min-vh-100 bg-white">
      {!homepage ?
        <Row className="min-vh-100">
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
                    { icon: <GoogleIcon />, label: "Google" },
                    { icon: <FacebookIcon />, label: "Facebook" },
                    { icon: <LinkedInIcon />, label: "LinkedIn" },
                    { icon: <TwitterIcon />, label: "Twitter" },
                  ].map((social, index) => (
                    <Button
                      key={index}
                      variant="outline-secondary"
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "48px",
                        height: "48px",
                        borderColor: "#dee2e6",
                      }}

                    >
                      {social.icon}
                    </Button>
                  ))}
                </div>
              </Form>
            </div>
          </Col>

          <Col lg={6} className="d-none d-lg-flex align-items-center justify-content-center position-relative">
          
            <div className="position-absolute" style={{ top: "80px", right: "120px" }}>
              <svg width="80" height="80" viewBox="0 0 100 100" style={{ fill: "#444" }}>
                <path d="M70 30c0-11.046-8.954-20-20-20s-20 8.954-20 20c0 8.837 5.731 16.347 13.685 19.002L40 65h5v10h10V65h5l-3.685-15.998C64.269 46.347 70 38.837 70 30zM50 40c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z" />
              </svg>
            </div>

            <div className="position-absolute" style={{ top: "160px", right: "80px" }}>
              <svg width="60" height="40" viewBox="0 0 60 40" style={{ fill: "#444" }}>
                <path d="M10 20c0-5.523 4.477-10 10-10h20c5.523 0 10 4.477 10 10s-4.477 10-10 10H20c-5.523 0-10-4.477-10-10z" />
                <circle cx="45" cy="30" r="8" />
              </svg>
            </div>

            <div className="position-absolute">
              <img src={MyImage} alt="My Image" />
            </div>
          </Col>
        </Row>
        : <Home />
      }
    </Container>
  )
}

