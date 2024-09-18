import { Cairo, Playfair_Display } from "next/font/google";
import "../../styles/tailwind.scss";
import { i18n, Locale } from "../../../i18n-config";
import { getDictionaries, setDictionaries } from "@/get-dictionary";
import Navbar from "@/app/_components/Navbar";
import { Suspense } from "react";
import InternetConnection from "@/app/_components/InternetConnection";
import getLocalizedData from "@/services/getLocalizedData";
import { LayoutProps } from "@/models/IDictionary/Layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { isRtlLang } from "../utils/isRtlLang";
import { getLangDir } from "../utils/getLangDir";
import Footer from "../_components/Footer";
import { GoogleTagManager } from '@next/third-parties/google';
import Scroll from "../_components/Scroll";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP)

const PlayfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});
const cairoFont = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
});


export const metadata = {
  manifest: '/manifest.json',
  //@ts-ignore
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_DOMAIN),
};
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}


export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  setDictionaries(getDictionaries());
  const { internetConnection, navbar, pagesLinks, footer } = await getLocalizedData<LayoutProps>(lang, 'layout');
  const fontFamilyVariable = isRtlLang(lang) ? cairoFont.variable : PlayfairDisplay.className;
  return (
    <html lang={lang} dir={getLangDir(lang)} className={fontFamilyVariable}>
      <body>
        <GoogleTagManager gtmId="GTM-WDZ2M6ZR" />
        <Suspense>
          <Scroll />
        </Suspense>
        <Suspense>
          <InternetConnection {...internetConnection} />
        </Suspense>
        <Suspense>
          <Navbar {...navbar} links={pagesLinks} />
        </Suspense>
        <main>
          {children}
        </main>
        <Footer {...footer} links={pagesLinks} />
      </body>
    </html>
  );
}
