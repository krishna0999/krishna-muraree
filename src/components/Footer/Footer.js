import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import Button from "../../styles/GlobalComponents/Button";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  FormWrapper,
  FormTitle,
  FormSpan,
  FormBody,
  Names,
  Name,
  Input,
  Label,
  TextArea,
  ButtonDiv,
  Email,
} from "./FooterStyles";

const Footer = () => {
  const form = useRef();
  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l1q385r",
        "template_6fanwb9",
        form.current,
        "user_BnxKFxK0FfIgJQtxYC5St"
      )
      .then((res) => {
        console.log(res);
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <FooterWrapper>
      <FormWrapper>
        <FormTitle>
          {" "}
          <FormSpan>Let's Talk </FormSpan>
        </FormTitle>
        <FormBody ref={form} onSubmit={sendMail}>
          <Names>
            <Name>
              <Label>First Name</Label>
              <Input
                type="text"
                name="firstname"
                placeholder="Enter your first name..."
              />
            </Name>
            <Name>
              <Label>Last Name</Label>
              <Input
                type="text"
                name="lastname"
                placeholder="Enter your last name..."
              />
            </Name>
          </Names>
          <Email>
            <Label>E-mail </Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email..."
            />
          </Email>
          <Name>
            <Label>Leave a message </Label>
            <TextArea placeholder="Enter your message..." name="message" />
          </Name>
          <ButtonDiv>
            <Button>Send message</Button>
          </ButtonDiv>
        </FormBody>
      </FormWrapper>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Think with your brain, work with your heart.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/krishna0999" target="_blank">
            <AiFillGithub />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/krishna-muraree-53a91a222/"
            target="_blank"
          >
            <AiFillLinkedin />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/code99krishna" target="_blank">
            <AiFillTwitterCircle />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
