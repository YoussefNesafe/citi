import NewsBlogsHeader from '@/app/_sections/about/NewsAndBlogs/NewsBlogsHeader';
import getLocalizedData from '@/services/getLocalizedData';
import React from 'react'
import { Locale } from '../../../../../i18n-config';
import { NewsAndBlogsPagesType } from '@/models/IDictionary/AboutPages/NewsAndBlogsPages';
import NewsBlogsCards from '@/app/_sections/about/NewsAndBlogs/NewsBlogsCards';

const BlogsPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { button, cards, header } = await getLocalizedData<NewsAndBlogsPagesType>(lang, 'about.blogs');
  return (
    <>
      <NewsBlogsHeader header={header} button={button} className='section-pt2 desktop:section-py' />
      <NewsBlogsCards cards={cards} className='section-pb' />
    </>
  )
}

export default BlogsPage