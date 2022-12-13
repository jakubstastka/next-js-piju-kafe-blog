import { BLOG_NAME, BLOG_PUNCHLINE } from "../lib/constants";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:items-baseline md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl text-geraniumlake md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {BLOG_NAME}
      </h1>
      <h4 className="text-center text-floralwhite md:text-left text-md italic font-light mt-5 md:pl-8">
        {BLOG_PUNCHLINE}
      </h4>
    </section>
  );
};

export default Intro;
