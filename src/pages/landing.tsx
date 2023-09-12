'use client'

import Wrapper from "@/wrappers/landing";
import main from "/public/images/main.svg";
import Image from "next/image";
// import { Image } from "@chakra-ui/next-js";
// import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>search</span> app
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Tempora fuga repellat vero enim laboriosam inventore vel
            dicta doloremque nemo, nesciunt mollitia aut libero
            officia voluptates provident optio ipsa dignissimos illo?
          </p>
        </div>
        <Image
          src="/images/main2.svg"
          alt="job search"
          className="img main-img"
          height={200}
          width={200}
          quality={65}
          priority={true}
        />
      </div>
    </Wrapper>
  );
};

export default Landing;
