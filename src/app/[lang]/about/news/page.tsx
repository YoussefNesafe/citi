import React from 'react'
import { Locale } from '../../../../../i18n-config';
import getLocalizedData from '@/services/getLocalizedData';
import NewsBlogsHeader from '@/app/_sections/about/NewsAndBlogs/NewsBlogsHeader';
import { NewsAndBlogsPagesType } from '@/models/IDictionary/AboutPages/NewsAndBlogsPages';
import NewsBlogsCards from '@/app/_sections/about/NewsAndBlogs/NewsBlogsCards';
import { Metadata } from 'next';
import { MetaDataType } from "@/models/IDictionary/SharedProps";

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  // fetch data
  const metadata = await getLocalizedData<MetaDataType>(lang, 'about.news.metadata');
  return {
    ...metadata,
  };
}

const NewsPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { button, cards, header } = await getLocalizedData<NewsAndBlogsPagesType>(lang, 'about.news');
  return (
    <>
      <NewsBlogsHeader header={header} button={button} className='section-pt2 desktop:section-py' />
      <NewsBlogsCards cards={cards} className='section-pb' />
    </>
  )
}

export default NewsPage