import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import { css } from "@emotion/react";
import { contentContainer } from "@/styles/generalStyles";
import messageImg from "@/assets/images/message.png";
import githubImg from "@/assets/images/github.png";
import linkedInImg from "@/assets/images/linkedIn.png";
import emailImg from "@/assets/images/email.png";
import Link from "next/link";
import colors from "@/value/colors";

const container = css`
  display: flex;
  justify-content: center;
  height: 100%;
  min-height: calc(100vh - 5rem);
`;
const contentWrapper = css`
  ${contentContainer}
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
  width: 100%;
`;

const infoContainer = css`
  width: 60%;
  display: flex;
  flex-direction: column;
`;
const message = css`
  width: 40%;
  height: fit-content;
`;
const title = css`
  font-size: clamp(1.5rem, 3vw, 4rem);
  max-width: 45rem;
`;
const description = css`
  font-size: 1.375rem;
  line-height: 1.4;
  padding: 1rem 0;
`;
const socialContainer = css`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  gap: 1rem;
`;

const emailContainer = css`
  display: flex;
  gap: 1rem;
`;
const emailBox = css`
  padding: 1rem;
  background-color: rgba(142, 77, 247, 0.17);
  border-radius: 0.5rem;
`;
const emailInfo = css`
  display: flex;
  flex-direction: column;
  font-size: 1.375rem;
  justify-content: space-between;
  padding: 0.5rem;
`;

const icon = css`
  height: 2.5rem;
  width: fit-content;

  transform: all 0.5s ease-in;

  &:hover {
    transform: scale(1.2);
  }
`;
const emailTitle = css``;
const mediaContainer = css`
  padding: 1rem;
  background-color: rgba(142, 77, 247, 0.17);
  border-radius: 0.5rem;
  font-size: 1.375rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  display: flex;

  max-width: 80%;
`;
const line = css`
  width: 5rem;
  height: 3px;
  border-radius: 0.25rem;
  background-color: ${colors.purple};
`;
const list = css`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ContactPage: NextPage = () => {
  return (
    <PageContainer>
      <PageMeta
        title="Min - Contact Me"
        description={"Nhung Nguyen"}
        image={null}
      />

      <div css={container}>
        <div css={contentWrapper}>
          <div css={infoContainer}>
            <h1 css={title}>Have a project in mind or just want to say hi? </h1>
            <p css={description}>
              Feel free to contact me. I'm always eager to connect with fellow
              developers and potential clients!
            </p>

            <div css={socialContainer}>
              <div css={emailContainer}>
                <div css={emailBox}>
                  <img src={emailImg.src} css={icon} />
                </div>
                <div css={emailInfo}>
                  <p css={emailTitle}>EMAIL</p>
                  <b>iminb2b@gmail.com</b>
                </div>
              </div>
              <div css={mediaContainer}>
                <b>Follow me on social media</b>
                <div css={list}>
                  <div css={line}></div>

                  <Link href="https://github.com/iminb2b">
                    <img src={githubImg.src} css={icon} />
                  </Link>
                  <Link href="https://www.linkedin.com/in/iminb2b/">
                    <img src={linkedInImg.src} css={icon} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img src={messageImg.src} css={message} />
        </div>
      </div>
    </PageContainer>
  );
};

export default ContactPage;
