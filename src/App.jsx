import Bannar from "./Components/Bannar";
import NavBar from "./Components/NavBar";
import Row from "./Components/Row";
import { requests } from "./utils/data";

export default function App() {
  return (
    <>
      <NavBar />
      <section className="container mx-auto ">
        <Bannar />
        <div className="px-3 sml:px-5">
          {requests.map(({ id, title, URL }, index) => (
            <Row
              key={id}
              title={title}
              fetchURL={URL}
              isLargeRow={id === "req_1" ? true : false}
            />
          ))}
        </div>
      </section>
    </>
  );
}
