import { Helmet } from "react-helmet";
import React from "react";
import Layout from "../Components/Layout/Layout";
import styled from "styled-components";
import Header from "../Components/Views/Rezervace/Header";

const Reservation = () => {
  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          src="https://booking.previo.cz/iframe/"
        ></script>
      </Helmet>

      <Layout>
        <Header />
        <Wrap>
          <Container>
            <div className="previo-reservation-form">
              <iframe
                src="https://booking.previo.cz/?hotId=758539&theme=dark"
                scrolling="no"
                frameborder="0"
                width="100%"
                height="2000"
                name="previo-booking-iframe"
                id="previo-booking-iframe"
                allowTransparency="true"
              ></iframe>
            </div>
          </Container>
        </Wrap>
      </Layout>
    </>
  );
};

export const Wrap = styled.div`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 150px;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1444px;
  width: 100%;
`;

export default Reservation;
