"use client"

import { useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../store/store"
import { fetchCountries } from "../store/countriesSlice"
import Header from "./header"
import Slider from "./slider"
import CountriesList from "./countries-list"
import Footer from "./footer"

export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  return (
    <div className="min-vh-100 bg-light">
      <Header />
      <Container fluid className="py-4">
        <Row className="justify-content-center">
          <Col lg={10}>
             <div className="text-center mb-4">
              <div className="position-relative mb-4 d-none d-md-block" style={{ height: "60px" }}>
                <div
                  className="position-absolute"
                  style={{
                     height: "2px",
                    backgroundColor: "#333",
                    width: "400px",
                    top: "40%",
                    right: "57%",
                    marginRight: "120px",
                  }}
                />
                <h1
                  className="display-4 fw-bold text-dark mb-0 position-absolute"
                  style={{
                    left: "45%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "220px",
                  }}
                >
                  WELCOME
                </h1>
                <div
                  className="position-absolute"
                  style={{
                    height: "2px",
                    backgroundColor: "#333",
                    width: "480px",
                    top: "90%",
                    left: "55%",
                    marginLeft: "65px",
                  }}
                />
              </div>
              <div className="d-block d-md-none mb-4">
                <div
                  className="mx-auto mb-3"
                  style={{
                    height: "2px",
                    backgroundColor: "#333",
                    width: "100%",
                  }}
                />
                <h1 className="display-5 fw-bold text-dark mb-3">WELCOME</h1>
                <div
                  className="mx-auto"
                  style={{
                    height: "2px",
                    backgroundColor: "#333",
                    width: "100%",
                  }}
                />
              </div>
            </div>
            <Slider />
            <CountriesList />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}
