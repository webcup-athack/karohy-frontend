import { Wrapper } from "../layout";
import SEO from "../components/seo";
import dynamic from "next/dynamic";
import Home from "../components/#home/Home";

export default function index() {
  const CustomCursor = dynamic(
    () => {
      return import("../components/custom/custom-cursor/CustomCursor");
    },
    { ssr: false }
  );
  return (
    <Wrapper>
      <SEO pageTitle={"Accueil"} />
      <CustomCursor />
      <Home />
    </Wrapper>
  );
}
