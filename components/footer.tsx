import Link from "next/link";
import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-satingold border-t border-satingold text-jet">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            piju kafe
          </h3>
          <div className="flex text-raspbjeterry flex-col text-sm italic justify-center md:justify-start space-y-2 items-center md:items-start text-center lg:pl-4 lg:w-1/2">
            <div>
              Tohle je blog s mejma kafe historkama/názorama. Takže k tomu tak
              přistupujte.
            </div>
            <div>
              Nejsem barista, ani od fochu. Jsem programátor a učím se s
              Next.js.
            </div>
            <div>Fotky vlastní, ilustrace generuje Midjourney AI.</div>
            <div>
              <Link href={"mailto:furt@pijukafe.cz"}>
                Napsat mi můžete <span className="underline">sem</span>.
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
