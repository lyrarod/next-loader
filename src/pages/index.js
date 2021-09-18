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
        <Loader
        // color="cyan"
        // size={100}
        // ================
        />
      </Section>

      <Section bgcolor="rebeccapurple">
        <Loader size={30} color="yellow" />
        <Loader size={40} color="red" />
        <Loader />
        <Loader size={60} color="blue" />
        <Loader size={70} color="tomato" />
      </Section>
    </>
  );
}
