"use client"

import { Navbar, Nav, Container } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import type { RootState, AppDispatch } from "../store/store"
import { setFilter } from "../store/countriesSlice"

export default function Header() {
  const dispatch = useDispatch<AppDispatch>()
  const currentFilter = useSelector((state: RootState) => state.countries.currentFilter)

  const filters = ["All", "Asia", "Europe", "Africa", "Americas", "Oceania"]

  const handleFilterChange = (filter: string) => {
    dispatch(setFilter(filter))
  }

  return (
    <Navbar bg="white" expand="lg" className="border-bottom">
      <Container>
        <Navbar.Brand href="#" className="fw-bold fs-4">
          Countries
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {filters.map((filter) => (
              <Nav.Link
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-3 ${currentFilter === filter ? "fw-bold  border-bottom border-black" : "text-muted"}`}
                style={{ cursor: "pointer" }}
              >
                {filter}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
