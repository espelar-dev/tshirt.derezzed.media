import { useRouter } from "next/router";
import Design from "@/components/atoms/Design";

const DesignPage = () => {
  const router = useRouter();
  const { id } =router.query || ""

  return (
    <>
      <Design id={id} />
    </>
  );
}

export default DesignPage;