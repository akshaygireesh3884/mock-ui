"use client"

import { Container, Row, Col, Button } from "react-bootstrap"
import YoutubeIcon from "@mui/icons-material/Google"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"

export default function Footer() {
    return (
        <footer className="bg-white text-dark py-4 mt-5">
            <Container>
                <Row>
                    <Col className="text-center">
                        <div className="d-flex justify-content-center gap-3 mb-3">
                            {[
                                { icon: <YoutubeIcon />, label: "Youtube" },
                                { icon: <FacebookIcon />, label: "Facebook" },
                                { icon: <LinkedInIcon />, label: "LinkedIn" },
                                { icon: <TwitterIcon />, label: "Twitter"},
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
                        <p className="mb-1">example@email.com</p>
                        <p className="mb-0 small">Copyright © 2024 Name. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
