import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel mb-10 mt-2 h-[780px] w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="absolute flex gap-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]] top-0 right-0 bottom-0 left-0  text-white font-bold  items-center ">
          <div className="space-y-7 ms-12 w-1/2 ">
            <h3 className="text-5xl">Affordable Price For Car Servicing</h3>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-primary mr-7">Discover More</button>
            <button className="btn btn-secondary btn-outline">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex gap-6 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle btn-secondary">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle btn-secondary">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute flex gap-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]] top-0 right-0 bottom-0 left-0  text-white font-bold  items-center ">
          <div className="space-y-7 ms-12 w-1/2 ">
            <h3 className="text-5xl">Affordable Price For Car Servicing</h3>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-primary mr-7">Discover More</button>
            <button className="btn btn-secondary btn-outline">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <div className="absolute flex gap-6 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle btn-secondary">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle btn-secondary">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute flex gap-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]] top-0 right-0 bottom-0 left-0  text-white font-bold  items-center ">
          <div className="space-y-7 ms-12 w-1/2 ">
            <h3 className="text-5xl">Affordable Price For Car Servicing</h3>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-primary mr-7">Discover More</button>
            <button className="btn btn-secondary btn-outline">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex gap-6 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle btn-secondary">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle btn-secondary">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute flex gap-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]] top-0 right-0 bottom-0 left-0  text-white font-bold  items-center ">
          <div className="space-y-7 ms-12 w-1/2 ">
            <h3 className="text-5xl">Affordable Price For Car Servicing</h3>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-primary mr-7">Discover More</button>
            <button className="btn btn-secondary btn-outline">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex gap-6 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle btn-secondary">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle btn-secondary">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
