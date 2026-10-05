import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <div className="container">
      <div className="p-4 w-1/2 mx-auto grid gap-8 md:flex-row md:justify-between md:items-center">
        <div className="max-w-[48rem] flex items-center justify-center">
          {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
        </div>
        <div className="flex flex-col gap-8">
          {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} size="sm" className="shrink" {...link} />
          })}
        </div>
      </div>
    </div>
  )
}
