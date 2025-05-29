"use client"

import { useSelector, useDispatch } from "react-redux"
import { Row, Col, Card } from "react-bootstrap"

import type { RootState, AppDispatch } from "../store/store"
import { nextSlide, prevSlide, goToSlide } from "../store/sliderSlice"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import image5 from '../5.png'



export default function Slider() {
    const dispatch = useDispatch<AppDispatch>()
    const { currentSlide, slides } = useSelector((state: RootState) => state.slider)

    return (
        <Row className="mb-5 g-3 g-md-4">
            <Col lg={8} className="mb-3 mb-lg-0">
                <Card className="border-0 shadow-sm">
                    <div className="position-relative" style={{ height: "300px" }}>
                        <img
                            src={slides[currentSlide] || "/placeholder.svg"}
                            alt={`Slide ${currentSlide + 1}`}
                            className="w-100 h-100 object-fit-cover rounded"
                        />
                        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
                            <div className="d-flex gap-2">
                                <ArrowBackIcon onClick={() => dispatch(prevSlide())}  style={{ marginTop: "-4px"}}/>
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`btn rounded-circle ${index === currentSlide ? "btn-dark" : "btn-light"}`}
                                        onClick={() => dispatch(goToSlide(index))}
                                        style={{ width: "12px", height: "12px", padding: 0 }}
                                    />
                                ))}
                                <ArrowForwardIcon onClick={() => dispatch(nextSlide())} style={{ marginTop: "-4px"}}/>
                            </div>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col lg={4}>
                <Card className="border-0 shadow-sm h-100">
                    <div className="d-flex align-items-center justify-content-center h-100 ">
                        <img src={image5} alt="Side image" className="img-fluid h-100 object-fit-cover rounded" />
                    </div>
                </Card>
            </Col>
        </Row>
    )
}


