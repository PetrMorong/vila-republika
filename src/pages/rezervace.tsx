import { Helmet } from "react-helmet";
import React from "react";
import Layout from "../Components/Layout/Layout";
import styled from "styled-components";

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
        <Wrap>
          <Container>
            <div class="previo-reservation-form">
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
  margin-top: 200px;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1444px;
  width: 100%;
`;

export default Reservation;
