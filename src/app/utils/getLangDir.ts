import { RTL_LANGUAGES } from "@/constants";
import { Locale } from "../../../i18n-config";

export const getLangDir = (lang: Locale) => RTL_LANGUAGES.includes(lang.toLowerCase()) ? 'rtl' : 'ltr';