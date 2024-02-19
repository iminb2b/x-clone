import { FC, useContext } from "react";
import { css } from "@emotion/react";
import { contentContainer } from "@/styles/generalStyles";
import Link from "next/link";
import routeLinks from "@/routeLinks";
import { LanguageContext } from "@/context/LanguageContext";
import buttonStyles from "@/styles/buttonStyles";
import code from "@/assets/images/code.png";
import phone from "@/assets/images/phone.png";

const container = css`
  display: flex;
  justify-content: center;
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
`;
const title = css`
  font-size: 4rem;
  font-weight: bold;
  line-height: 1.4;
`;
const description = css`
  margin: 2rem 0;
  font-size: 1.375rem;
  max-width: 700px;
  line-height: 1.5;
  text-align: center;
`;
const codeIcon = css`
  width: 16.5rem;
  height: 12.375rem;
  position: absolute;
  top: 5vh;
  left: 0;
`;
const phoneIcon = css`
  width: 320px;
  height: 354px;
  position: absolute;
  bottom: 14vh;
  right: 0;
`;

const HomePageHero: FC = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div css={container}>
      <div css={contentWrapper}>
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
          css={buttonStyles({ size: "large" })}
        >
          View Projects
        </Link>
      </div>
    </div>
  );
};

export default HomePageHero;
