import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

const Musing = () => {
  const router = useRouter();
  const { title } = router.query;

  return (
    <div className="min-h-[100vh]">
      {/* convert center to tailwind and merge divs */}
      <div className={styles.center}>
        <p>Musing: {title}</p>
      </div>
    </div>
  );
};

export default Musing;
