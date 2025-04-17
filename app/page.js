// import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className="lead text-center fs-1 py-5">Welcome to <span className="text-danger">Homepage</span></h1>
    </div>
  );
}
