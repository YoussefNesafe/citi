"use client"
import Card from '@/app/_components/Card';
import { CardType } from '@/app/_components/Card/types';
import Spinner from '@/app/_components/Spinner';

import { formatDate } from '@/app/utils/formatDate';
import { isRtlLang } from '@/app/utils/isRtlLang';
import { cn } from '@/lib/utils';
import { PostResponse } from '@/models/BlogsTypes';
import { AdditionalProps } from '@/models/IDictionary/SharedProps';
import getBlogPosts from '@/services/getBlogPosts';
import React, { useEffect, useState } from 'react'
import { Locale } from '../../../../../../i18n-config';
import { sanitize } from 'isomorphic-dompurify';





type Props = PostResponse & AdditionalProps & {
  classNames?: {
    title?: string;
    description?: string;
    contentWrapper?: string;
  }
}


const BlogsCards = ({ className }: AdditionalProps) => {


  const [blogPosts, setBlogPosts] = useState<PostResponse[]>([]); // Adjust type as needed
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<PostResponse | null>(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const posts = await getBlogPosts();
      if (posts) setBlogPosts(posts);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading && blogPosts.length === 0) return <div className='text-center font-bold text-[32px] tablet:text-[42px] desktop:text-[56px]'>Loading...</div>
  return (
    <section className={cn('', className)} >
      <Card
        description={blogPosts?.[0]?.title?.rendered}
        image={{
          src: blogPosts?.[0]?.rttpg_featured_image_url?.full?.[0],
          width: blogPosts?.[0]?.rttpg_featured_image_url?.full?.[1],
          height: blogPosts?.[0]?.rttpg_featured_image_url?.full?.[2],
          alt: 'Image',
        }}
        date={blogPosts?.[0]?.date}
        type={CardType.BLOGS_CARD}
        button={{
          title: 'Read More',
          href: '/'
        }}
        className="tablet:flex-row  mb-[6.99vw] tablet:mb-[3.75vw] desktop:mb-[1.56vw] gap-[6.99vw] tablet:gap-[3.75vw] desktop:gap-[1.56vw]" classNames={{
          title: "desktop:text-[1.2vw] text-gray-450",
          description: "text-right tablet:max-w-[62.5vw] desktop:max-w-full tablet:self-end desktop:self-stretch desktop:text-[1.5vw] text-dark font-bold",
          contentWrapper: 'justify-around ',
        }} />
      <div className='w-full flex gap-[6.99vw]  tablet:gap-[3.75vw] desktop:gap-[1.56vw] flex-wrap justify-center'>
        {
          blogPosts.map((post, index) => index !== 0 && <Card
            key={post.id}
            title={post?.title?.rendered}
            image={{
              src: post?.rttpg_featured_image_url?.full?.[0],
              width: post?.rttpg_featured_image_url?.full?.[1],
              height: post?.rttpg_featured_image_url?.full?.[2],
              alt: 'Image',
            }}
            date={post?.date}
            type={CardType.BLOGS_CARD}
            button={{
              title: 'Read More',
            }}
            className='tablet:max-w-[41.5vw] desktop:max-w-[26.1vw] h-auto'
            classNames={{
              contentWrapper: ' h-full justify-between'
            }}
            content={post.content?.rendered}
          />)
        }

      </div>
    </section>
  )
}

export default BlogsCards