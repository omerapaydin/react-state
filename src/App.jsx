import { sculptureList } from "./data/sculptureList";

function App() {
  let index = 0;
  let sculpture = sculptureList[index];

  function handlePreviousClick() {
    console.log("Geri clicked");
  }
  function handleNextClick() {
    console.log("İleri clicked");
  }
  return (
    <>
      <button onClick={handlePreviousClick}>Geri</button>
      <button onClick={handleNextClick}>İleri</button>

      <h2>
        <i>
          {sculpture.name} by {sculpture.artist}
        </i>
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt}></img>
      <p>{sculpture.description}</p>
    </>
  );
}

export default App;
