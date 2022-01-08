import styled from "styled-components";

export const FooterWrapper = styled.section`
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`;

export const FormWrapper = styled.section`
  width: 500px;
  padding: 15px;
  margin: 2rem auto;
  background-color: transparent;
  border-radius: 10px;
  border: 3px solid #d6d8da;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 16px;
    width: calc(100vw - 32px);
  }
`;

export const FormTitle = styled.div`
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const FormSpan = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;

export const FormBody = styled.form`
  width: 100%;
  margin: 5px 0;
  padding: 10px 5px;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: calc(100vw - 32px);
  }
`;

export const Names = styled.div`
  width: 100%;
  display: flex;
  padding: 5px 2px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const Name = styled.div`
  flex: 1;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 0 18px;
    width: calc(100vw - 72px);
    display: flex;
    flex-direction: column;
  }
`;

export const Email = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 0 18px;
    width: calc(100vw - 72px);
    display: flex;
    flex-direction: column;
  }
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 5px;
  outline-width: 0;
  background: transparent;
  color: white;
  margin: 10px 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export const Label = styled.label`
  font-size: 12px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    margin: 0;
  }
`;

export const TextArea = styled.textarea`
  padding: 5px;
  border: 2px solid gray;
  width: 100%;
  height: 200px;
  border-radius: 4px;
  background-color: transparent;
  font-size: 16px;
  resize: none;
  color: white;
  margin: 10px 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 160px;
  }
`;

export const ButtonDiv = styled.div`
  width: 100%;
  padding: 10px;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: calc(100vw - 72px);
    padding: 10px;
  }
`;

export const LinkItem = styled.a`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 16px;
  transition: 0.3s ease;
  position: relative;
  left: 0;

  &:hover {
    color: #fff;
    left: 6px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
    display: flex;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 8px;
    line-height: 14px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }
`;

export const SocialIconsContainer = styled.div`
  max-width: 1040px;
  display: flex;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: space-between;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-right: auto;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    align-items: baseline;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 0 0 32px;
    align-items: center;
  }
`;

export const Slogan = styled.p`
  color: rgba(255, 255, 255, 0.5);
  min-width: 280px;
  letter-spacing: 0.02em;
  font-size: 18px;
  line-height: 30px;
  padding: 1rem;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    line-height: 22px;
    font-size: 14px;
    min-width: 100px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
    padding-right: 16px;
    flex-wrap: wrap;
  }
`;

export const LinkList = styled.ul`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(3, minmax(85px, 220px));
  gap: 40px;
  padding: 40px 0 28px;

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 32px 0 16px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    padding: 32px 0 16px;
    gap: 16px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    padding: 32px 4px 16px;
    gap: 5px;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
`;
export const LinkTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 16px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 8px;
  }
`;
