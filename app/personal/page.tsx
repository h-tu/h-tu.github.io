import personalData from '@/data/personalData'
import Image from '@/components/Image'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Personal' })

export default function Personal() {
  return (
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Personal
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          My life outside of research: photography, sports, and hobbies.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
          {personalData.map((d) => (
            <div key={d.title} className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
              <div className="overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700">
                {}
                <div className="grid grid-cols-2 gap-1 bg-gray-100 dark:bg-gray-800">
                  {d.images.map((img, index) => (
                    <div 
                      key={img} 
                      className={`${d.images.length === 1 ? 'col-span-2' : 'col-span-1'} ${index === 0 && d.images.length === 3 ? 'row-span-2' : ''}`}
                    >
                      <Image
                        alt={d.title}
                        src={img}
                        className="object-cover object-center"
                        width={544}
                        height={index === 0 && d.images.length === 3 ? 612 : 306}
              />
                    </div>
            ))}
          </div>
                {/* 文字描述 */}
                <div className="p-6">
                  <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                    {d.title}
                  </h2>
                  <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                    {d.description}
                  </p>
                  
                  {/* 新增的列表渲染逻辑 */}
                  {d.list && (
                    <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pl-5 list-disc text-sm text-gray-500 dark:text-gray-400">
                      {d.list.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}