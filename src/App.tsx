import Header from "./components/header";
import Container from "./components/layouts/container";
import FirstSection from "./components/layouts/firstsection";

function App() {
  return (
    <FirstSection>
      <Container>
        <Header />
      </Container>
    </FirstSection>
  );
}

export default App;
