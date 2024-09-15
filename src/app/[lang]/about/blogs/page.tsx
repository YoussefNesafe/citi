import NewsBlogsHeader from '@/app/_sections/about/NewsAndBlogs/NewsBlogsHeader';
import getLocalizedData from '@/services/getLocalizedData';
import React, { Suspense } from 'react'
import { Locale } from '../../../../../i18n-config';
import { NewsAndBlogsPagesType } from '@/models/IDictionary/AboutPages/NewsAndBlogsPages';
import NewsBlogsCards from '@/app/_sections/about/NewsAndBlogs/NewsBlogsCards';
import { Metadata } from 'next';
import { MetaDataType } from "@/models/IDictionary/SharedProps";
import BlogsCards from '@/app/_sections/about/NewsAndBlogs/BlogsCards';

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  // fetch data
  const metadata = await getLocalizedData<MetaDataType>(lang, 'about.blogs.metadata');
  return {
    ...metadata,
  };
}
const BlogsPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { button, cards, header } = await getLocalizedData<NewsAndBlogsPagesType>(lang, 'about.blogs');
  return (
    <>
      <NewsBlogsHeader header={header} button={button} className='section-pt2 desktop:section-py' />
      <Suspense>
        <BlogsCards />
      </Suspense>
      {/* <NewsBlogsCards cards={cards} className='section-pb' /> */}
    </>
  )
}

export default BlogsPage