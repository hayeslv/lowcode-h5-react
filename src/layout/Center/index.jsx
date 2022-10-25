import { useCanvasData } from "../../store/hooks";
import Cmp from "./Cmp";
import styles from "./index.module.scss";

export default function Center(props) {
  const canvas = useCanvasData()

  const { sytle, cmps } = canvas

  return (
    <div className={styles.main}>
      <div className={styles.canvas}>
        {
          cmps.map(cmp => (
            <Cmp key={cmp.key} cmp={cmp} />
          ))
        }
      </div>
    </div>
  );
}
