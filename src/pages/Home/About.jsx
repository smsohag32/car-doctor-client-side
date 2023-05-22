import parts from "../../assets/images/about_us/parts.jpg";
import person from "../../assets/images/about_us/person.jpg";
import { saveAs } from "file-saver";
const About = () => {
  const handleDownload = () => {
    saveAs(person, "person");
  };
  return (
    <div className="flex py-10 mb-10 gap-6">
      <div className="w-full relative">
        <img
          onClick={handleDownload}
          className="w-5/6"
          src={person}
          alt="person"
        />
        <img
          src={parts}
          className="w-1/2 top-1/2 right-0 border-8 z-50 border-stone-500 absolute"
          alt="parts"
        />
      </div>
      <div className="space-y-6 w-full">
        <h2 className="text-primary font-bold text-xl">About Us</h2>
        <h1 className="text-3xl font-bold">
          We are qualified & of experience in this field
        </h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly
          believable.
        </p>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
        <button className="btn btn-primary">Get More info</button>
      </div>
    </div>
  );
};

export default About;
