import styles from "./index.module.scss"

export default function Cmp({ cmp }) {
  const { style, value } = cmp
  return <div className={styles.cmp} style={style}>
    {value}
  </div>
}