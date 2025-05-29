"use client"

import { useSelector, useDispatch } from "react-redux"
import { Row, Col, Card, Button, Spinner } from "react-bootstrap"
import type { RootState, AppDispatch } from "../store/store"
import { loadMore } from '../store/countriesSlice'

export default function CountriesList() {
  const dispatch = useDispatch<AppDispatch>()
  const { displayedCountries, filteredCountries, loading, error } = useSelector((state: RootState) => state.countries)

  const hasMoreCountries = displayedCountries.length < filteredCountries.length

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-5">
        <p className="text-danger">Error: {error}</p>
      </div>
    )
  }

  return (
    <div>
      <Row className="g-3">
        {displayedCountries.map((country, index) => (
          <Col key={`${country.name}-${index}`} md={6}>
            <Card className="h-100 border shadow-sm">
              <Card.Body className="d-flex align-items-center">
                <div className="me-3">
                  <img
                    src={country.flag || "/placeholder.svg"}
                    alt={`${country.name} flag`}
                    style={{ width: "60px", height: "40px", objectFit: "cover" }}
                    className="rounded"
                  />
                </div>
                <div>
                  <h6 className="mb-1 fw-bold">{country.name}</h6>
                  <small className="text-muted">{country.region}</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {hasMoreCountries && (
        <div className="text-center mt-4">
          <Button variant="dark" onClick={() => dispatch(loadMore())} className="px-4 py-2">
            Load more
          </Button>
        </div>
      )}
    </div>
  )
}
