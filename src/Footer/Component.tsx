import { getCachedGlobal } from '@/utilities/getGlobals'
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  const content = footerData?.Content ?? null

  return (
    <footer className="min-h-[99vh] mt-auto border-t border-border bg-black dark:bg-card text-white">
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-center">
        <div>
          {content &&
            content.length > 0 &&
            content.map((col, index) => {
              const { columns } = col

              return (
                <div key={index} className="flex flex-col gap-4">
                  {columns &&
                    columns.length > 0 &&
                    columns.map((item, i) => {
                      const { richText } = item
                      return richText ? (
                        <RichText
                          key={i}
                          className="text-3xl"
                          data={richText}
                          enableGutter={false}
                        />
                      ) : null
                    })}
                </div>
              )
            })}
        </div>
      </div>
    </footer>
  )
}
