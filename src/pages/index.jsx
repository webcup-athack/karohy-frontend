import { Wrapper } from "../layout";
import HomeMain from "../components/homes/home";
import SEO from "../components/seo";
import dynamic from "next/dynamic";

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
      <HomeMain />
    </Wrapper>
  );
}
