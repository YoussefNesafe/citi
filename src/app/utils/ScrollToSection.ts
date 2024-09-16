"use client"
type Props = {elemSelector : string; offset?: number}
export const scrollToElement = ({elemSelector}: Props,offset = 0) => {
    const elem = document.querySelector(elemSelector)!;
    if (!elem) return;
    const top = elem.getBoundingClientRect().top + window.scrollY - offset;
    window.scroll({
      top,
      behavior: 'smooth',
    });
}