import { Wrapper } from "../layout";
import SEO from "../components/seo";
import RegisterMain from "../components/register";
import Register2 from "../components/register/register2";

export default function index() {
  return (
    <>
      <SEO pageTitle={'Register'} />
      <Wrapper>
        <Register2/>
      </Wrapper>
    </>
  )
}
