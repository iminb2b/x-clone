import { FC, useContext, useEffect } from "react";
import { css } from "@emotion/react";
import { LanguageContext } from "@/context/LanguageContext";
import routeLinks from "@/routeLinks";
import NavListItem from "./NavListItem";
import { useRouter } from "next/router";
import LanguageLinks from "./LanguageLinks";
import { Dialog, DialogStore } from "@ariakit/react/dialog";
import colors from "@/value/colors";

const container = css`
  display: flex;
  top: 4rem;
  left: "-1rem";
  width: 100%;
  background-color: ${colors.white};
  position: absolute;
  height: calc(100vh - 4rem);
  min-height: calc(100vh - 4rem);
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  padding: 3rem;
`;

export type NavInfo = {
  name: string;
  url: string;
  isButtonLink: boolean;
};

const NavListMobile: FC<{
  dialogStore: DialogStore;
}> = ({ dialogStore }) => {
  const { lang, strings } = useContext(LanguageContext);

  const router = useRouter();

  const navListInfo: NavInfo[] = [
    {
      name: "About",
      url: routeLinks.about({ lang }),
      isButtonLink: false,
    },
    {
      name: "Work",
      isButtonLink: false,
      url: routeLinks.projects({ lang }),
    },
    {
      name: "Contact",
      isButtonLink: true,
      url: routeLinks.contact({ lang }),
    },
  ];

  useEffect(() => {
    const onRouteChangeStart = () => {
      dialogStore.hide();
    };

    router.events.on("routeChangeStart", onRouteChangeStart);

    return () => {
      router.events.off("routeChangeStart", onRouteChangeStart);
    };
  }, [dialogStore, router.events]);

  return (
    <Dialog css={container} modal store={dialogStore}>
      {navListInfo.map((item, index) => (
        <NavListItem
          item={item}
          key={index}
          isActive={router.asPath === item.url}
        />
      ))}

      <LanguageLinks lang={lang} />
    </Dialog>
  );
};

export default NavListMobile;
