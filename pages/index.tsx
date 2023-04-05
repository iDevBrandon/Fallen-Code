import React from "react";
import styled from "styled-components";
import Accordion from "../components/Accordion";
import Header from "@/components/Header";
import { Algorithms, DataStructures } from "../lib/Data";

const Container = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Section = styled.div`
  padding: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Section>
          <SectionTitle>Data Structures</SectionTitle>
          <Accordion tabs={DataStructures} />
        </Section>
        <Section>
          <SectionTitle>Algorithms</SectionTitle>
          <Accordion tabs={Algorithms} />
        </Section>
      </Container>
    </div>
  );
};

export default App;
