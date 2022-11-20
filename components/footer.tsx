import Link from "next/link";
import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-chocolate border-t border-coffee">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl text-raspberry lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            piju kafe
          </h3>
          <div className="flex text-raspberry flex-col text-sm italic justify-start space-y-2 items-start lg:pl-4 lg:w-1/2">
            <div>Tohle je blog s mejma kafe historkama/názorama.</div>
            <div>
              Ne, že bych měl ještě nějaký literární ambice, ale potřebuju
              platformu, kde bych mohl experimentovat se serverless a Next.js.
            </div>
            <div>Nic, co je tady napsaný, by neměl nikdo brát nějak vážně.</div>
            <div>Fotky vlastní, ilustrace generuje Midjourney AI.</div>
            <div>
              <Link href={"mailto:furt@pijukafe.cz"}>
                Napsat mi můžete{" "}
                <span className="text-raspberry underline">sem</span>.
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
