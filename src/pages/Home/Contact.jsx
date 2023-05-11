import { AiFillCalendar, AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="bg-black text-white px-20 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <div className="flex gap-3 items-center">
          <AiFillCalendar className="text-3xl text-primary" />
          <div>
            <p>We are open monday-friday</p>
            <h4 className="text-xl font-bold">7:00 am - 9:00 pm</h4>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <AiOutlinePhone className="text-3xl text-primary" />
          <div>
            <p>Have a question?</p>
            <h4 className="text-xl font-bold">+2546 251 2658</h4>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <AiFillCalendar className="text-3xl text-primary" />
          <div>
            <p>Need a repair? our address</p>
            <h4 className="text-xl font-bold">Liza Street, New York</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
