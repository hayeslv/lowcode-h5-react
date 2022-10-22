import styles from "./App.module.scss";
import Center from "./layout/Center";
import Header from "./layout/Header";
import Left from "./layout/Left";
import Right from "./layout/Right";

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <Left />
        <Center />
        <Right />
      </div>
    </div>
  );
}

export default App;
