import { RTL_LANGUAGES } from "@/constants";
import { Locale } from "../../../i18n-config";

export const isRtlLang = (lang: Locale) => RTL_LANGUAGES.includes(lang.toLowerCase());