"use client"
import PhotoCard from '@/app/_components/PhotoCard'
import { cn } from '@/lib/utils'
import { AdditionalProps } from '@/models/IDictionary/SharedProps'
import { TabsSectionType, TabType } from '@/models/IDictionary/Tour360Page'
import React, { useState } from 'react'

const TabsTour360Section = ({ tabs, className, ...props }: AdditionalProps & { tabs: TabsSectionType }) => {
  const [activeTab, setActiveTab] = useState<string>('aveline')

  const handleTabClick = ({ tabKey }: TabType) => {
    setActiveTab(tabKey);
  }
  const activeCards = tabs.find(tab => tab.tabKey === activeTab)?.cards

  return (
    <section className={cn('flex flex-col items-center gap-[6.99vw] tablet:gap-[6.25vw] desktop:gap-[5.2vw]', className)} {...props}>
      <div className='w-full tablet:w-fit flex border border-gray-200 shadow-custom bg-white rounded-[1.398vw] tablet:rounded-[0.75vw] desktop:rounded-[0.312vw] overflow-hidden'>
        {
          tabs.map((tab) => <div key={tab.tabKey} className={cn('cursor-pointer hover:bg-primary-600 font-semibold transition-all text-[3.728vw] tablet:text-[2.25vw] desktop:text-[0.936vw] w-full tablet:w-[25vw] desktop:w-[10.4vw] py-[3.262vw] tablet:py-[1.75vw] desktop:py-[0.728vw] text-center', tab.tabKey === activeTab && 'bg-primary-900')} onClick={() => handleTabClick(tab)}>
            {tab.title}
          </div>)
        }
      </div>
      <div className='w-full flex flex-wrap gap-[4.66vw] tablet:gap-[2.5vw] desktop:gap-[2.5vw] '>
        {
          activeCards ? activeCards?.map((card, index) => <PhotoCard key={index + "-photoCard"} {...card} target="_blank" />) : <div className='text-center text-[5.592vw] tablet:text-[4vw] desktop:text-[2.6vw] w-full'>Coming Soon...</div>
        }

      </div>
    </section>
  )
}

export default TabsTour360Section