import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="App Development" icon="ri-apps-line" />

                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
            I pride myself in being able to quickly grasp the workflows and systems in place and completely integrate myself within a team quickly. I have been both a leader and a team member and realize the importance of receiving and giving new ideas to improve efficiency and precision in the products of a team. As an analytical problem solver, I have identified and provided solutions to procedural inefficiencies and ensured all levels of production receive new information in a timely manner. By maintaining relationships between customers, vendors, and other internal departments, I have creatively overcome shortcomings to maintain schedules and reduce delays. 

            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
