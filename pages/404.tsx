import Head from "next/head";
import Link from "next/link";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { BLOG_NAME } from "../lib/constants";

export default function NotFound() {
  return (
    <>
      <Layout>
        <Head>
          <title>{BLOG_NAME}</title>
        </Head>
        <Container>
          <Intro />
          <div className="mb-8 text-coffee text-3xl md:text-3xl font-bold tracking-tighter leading-tight">
            Hmm... Tohle tady není.
          </div>
          <div className="mb-8 text-coffee text-xl md:text-xl tracking-tighter leading-tight">
            Pokud si myslíte, že by tady něco mělo být, napište to prosím na{" "}
            <Link className="text-raspberry" href={"mailto:furt@pijukafe.cz"}>
              furt@pijukafe.cz.
            </Link>
          </div>

          <div className="mb-8 text-coffee text-2xl md:text-2xl font-bold tracking-tighter leading-tight">
            <Link href={"/"}>Zpět.</Link>
          </div>
        </Container>
      </Layout>
    </>
  );
}
