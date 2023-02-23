import { Container } from "./components/Container/Container";
import { Header } from "./components/header/Header";

export const App = () => {

  return (
    <>
      <Header />
    <main>
      <nav>
        <Container maks="leskin" className="navigation__container"/>
      </nav>
      <section></section>
    </main>
    <footer></footer>
    </>
  )
};