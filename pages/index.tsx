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

// const DataStructures = [
//   {
//     title: "Array & Hashing",
//     content: "",
//     problems: [
//       { title: "Contains Duplicate", url: "https://example.com/2" },
//       { title: "Valid Anagram", url: "https://example.com/5" },
//     ],
//   },
//   {
//     title: "Linked List",
//     content: "",
//     problems: [
//       { title: "Contains Duplicate", url: "https://example.com/56" },
//       { title: "Valid Anagram", url: "https://example.com/3" },
//     ],
//   },
//   {
//     title: "Queue",
//     problems: ["Definition", "Operations"],
//     content: "This is the content of Queue",
//   },
//   {
//     title: "Linked List",
//     problems: ["Definition", "Operations"],
//     content: "This is the content of Linked List",
//   },
//   {
//     title: "Queue",
//     problems: ["Definition", "Operations"],
//     content: "This is the content of Queue",
//   },
// ];

// const Algorithms = [
//   {
//     title: "Recursionh",
//     problems: ["Definition", "Algorithm"],
//     content: "This is the content of Binary Search",
//   },
//   {
//     title: "Merge Sort",
//     problems: ["Definition", "Algorithm"],
//     content: "This is the content of Merge Sort",
//   },
//   {
//     title: "Quick Sort",
//     problems: ["Definition", "Algorithm"],
//     content: "This is the content of Quick Sort",
//   },

//   {
//     title: "Merge Sort",
//     problems: ["Definition", "Algorithm"],
//     content: "This is the content of Merge Sort",
//   },
//   {
//     title: "Quick Sort",
//     problems: ["Definition", "Algorithm"],
//     content: "This is the content of Quick Sort",
//   },
// ];

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
