import { FC, useContext } from "react";
import { css, keyframes } from "@emotion/react";
import { contentContainer } from "@/styles/generalStyles";
import Link from "next/link";
import routeLinks from "@/routeLinks";
import { AppContext } from "@/context/AppContext";
import buttonStyles from "@/styles/buttonStyles";
import code from "@/assets/images/code.png";
import phone from "@/assets/images/phone.png";

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const contentWrapper = css`
  ${contentContainer}
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 5rem);
  padding-bottom: 5rem;
  width: 100%;
  text-align: center;
`;
const title = css`
  font-size: clamp(1.5rem, 7vw, 4rem);
  font-weight: bold;
  line-height: 1.4;
`;
const description = css`
  margin: 2rem 0;
  font-size: clamp(1rem, 3vw, 1.375rem);

  max-width: 700px;
  line-height: 1.5;
  width: 100%;
  text-align: center;
`;
const shaking = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(0eg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`;

const codeIcon = css`
  width: 16.5rem;
  height: 12.375rem;
  position: absolute;
  top: 5vh;
  left: 0;
  animation: ${shaking} 3s;
  animation-iteration-count: infinite;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const phoneIcon = css`
  width: 320px;
  height: 354px;
  position: absolute;
  bottom: 14vh;
  right: 0;
  animation: ${shaking} 3s;
  animation-iteration-count: infinite;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const HomePageHero: FC = () => {
  const {
    state: { lang, darkmode },
  } = useContext(AppContext);

  return (
    <div css={container}>
      <div css={contentWrapper} data-aos="fade-up">
        <img src={code.src} css={codeIcon} />
        <img src={phone.src} css={phoneIcon} />
        <h1 css={title}>Hi I'm min.</h1>
        <h1 css={title}>A Front-end Developer</h1>
        <p css={description}>
          Single landing page, content management system, custom code for object
          oriented programming, projects of all sizes and durations.
          <br />I write code.
        </p>

        <Link
          href={routeLinks.projects({ lang })}
          css={buttonStyles({ size: "large", darkmode })}
        >
          View Projects
        </Link>
      </div>
    </div>
  );
};

export default HomePageHero;
