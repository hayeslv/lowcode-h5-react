import Center from "./layout/Center";
import Header from "./layout/Header";
import Left from "./layout/Left";
import Right from "./layout/Right";
import { CanvasContext } from "./Context"
import styles from "./App.module.scss";
import { useCanvas } from "./store/canvas";

function App() {
  const canvas = useCanvas()

  return (
    <div className={styles.main}>
      <CanvasContext.Provider value={canvas}>
        <Header />
        <div className={styles.content}>
          <Left />
          <Center />
          <Right />
        </div>
      </CanvasContext.Provider>
    </div>
  );
}

export default App;
