import arrowRight from '../assets/images/arrow-right.svg';
import featuredImage from '../assets/images/featured-image.png';

const FirstSection = () => {
  return (
    <section className="grid grid-cols-2 mt-16">
      <div>
        <h1 className="text-4xl font-poppins font-bold text-button-bg mb-4">
          Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          aliquam, esse quas in necessitatibus, debitis voluptate maxime omnis
          autem veniam dicta eos! Magni ullam eum animi autem explicabo! Quo,
          tempora.
        </p>
        <a href="#" className="text-lg mt-6 flex items-center gap-2">
          Veja mais
          <img src={arrowRight} alt="arrow right" />
        </a>
      </div>
      <div className="justify-self-end">
        <img src={featuredImage} alt="first post" />
      </div>
    </section>
  );
};

export default FirstSection;
