import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
            <h3>Credits</h3>
            </Col>
            <Col md={6} xl={7}>
            <h9>Big thanks and all credits for the website design go to: </h9><a href="https://github.com/judygab" target="_blank" rel="noreferrer">judygab on GitHub</a>
             <a href="https://www.flaticon.com/" title="icons" target="_blank" rel="noreferrer"><br></br>Many icons created by Freepik - Flaticon</a>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
