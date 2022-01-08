import React from "react";
import Link from "next/link";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section main noPadding>
    <LeftSection>
      <SectionTitle main center>
        Hey there, my name is <br />
        Krishna Muraree <br />
        and i am a software developer.
      </SectionTitle>
      <SectionText>
        Welcome to my{" "}
        <span style={{ color: "white", fontWeight: "bold" }}>
          personal portfolio
        </span>
        , i am a{" "}
        <span style={{ color: "cyan", fontWeight: "bold" }}>
          software developer
        </span>{" "}
        (especially focussed on the frontend part of the web), here you would
        get almost all the details about me and also you can view/review my
        projects listed further below in the website, so go ahead and learn more
        about me.
      </SectionText>
      <Link href="#about">
        <Button>Learn More</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
