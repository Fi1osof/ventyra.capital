import { SeoHeaders } from 'src/components/seo/SeoHeaders'
import { JsonLd } from 'src/components/seo/JsonLd'
import { Page } from '../_App/interfaces'
import { createWebSite } from 'src/components/seo/JsonLd/helpers'
import { HomePage } from 'src/Ventyra/lovable/v1/src/ui-kit/pages/HomePage'

export const MainPage: Page = () => {
  const siteTitle = process.env.NEXT_PUBLIC_MAIN_PAGE_TITLE
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || ''

  return (
    <>
      {siteTitle && <SeoHeaders title={siteTitle} />}
      <JsonLd
        data={createWebSite({
          name: siteTitle || '',
          url: siteUrl,
        })}
      />

      <HomePage />
    </>
  )
}
