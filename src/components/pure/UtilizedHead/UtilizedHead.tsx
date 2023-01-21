import Head from 'next/head'
import { FC } from 'react'

import type { MetaData } from './UtilizedHead.types'

const UtilizedHead: FC<MetaData> = ({
  title = process.env.NEXT_PUBLIC_DEFAULT_TITLE,
  description = '',
  pageUrl,
  imageUrl,
  imageWidth = 1280,
  imageHeight = 640,
  language = 'ja_JP',
}) => (
  <Head>
    <title>{title}</title>
    <meta name='viewport' content='width=device-width,initial-scale=1.0' />
    <meta name='description' content={description} />
    {pageUrl && <meta property='og:url' content={pageUrl} />}
    <meta property='og:title' content={title} />
    <meta property='og:site_name' content={title} />
    <meta property='og:description' content={description} />
    <meta property='og:locale' content={language} />
    <meta property='og:type' content='website' />
    {imageUrl && <meta property='og:image' content={imageUrl} />}
    <meta property='og:image:width' content={String(imageWidth)} />
    <meta property='og:image:height' content={String(imageHeight)} />
    <link rel='preconnect' href='https://fonts.gstatic.com' />
    {/* eslint-disable-next-line @next/next/no-page-custom-font */}
    <link
      href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&amp;display=swap'
      rel='stylesheet'
    />
    <link rel='canonical' href={pageUrl} />
  </Head>
)

export default UtilizedHead
