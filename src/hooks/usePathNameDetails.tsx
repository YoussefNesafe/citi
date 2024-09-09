import { usePathname } from "next/navigation";
import { Locale } from "../../i18n-config";


export const usePathNameDetails = () => {

  const pathName = usePathname();

  const lang = pathName.split('/')[1];
  const groupPathName = pathName.split('/')[2];
  const pagePathName = pathName.split('/')[3];
  const innerPagePathName = pathName.split('/')[4];

  return {
    lang: lang as Locale,
    groupPathName,
    pagePathName,
    innerPagePathName
  }
}

export default usePathNameDetails