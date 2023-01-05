import { useRouter } from "next/router";

const Island = () => {
  const router = useRouter();
  const { title } = router.query;

  return <p>Island: {title}</p>;
};

export default Island;
