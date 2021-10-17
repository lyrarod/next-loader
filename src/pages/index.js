import styled from "styled-components";
import Loader from "../components/Loader";

const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
  background: ${({ bgcolor }) =>
    bgcolor
      ? `radial-gradient(whitesmoke, ${bgcolor})`
      : `radial-gradient(whitesmoke, steelblue)`};
`;

export default function Home() {
  return (
    <>
      <Section>
        <Loader />
        <Loader color="steelblue" size="60" />
      </Section>
      <Section bgcolor="rebeccapurple">
        <Loader color="rebeccapurple" size="80" />
      </Section>
    </>
  );
}
