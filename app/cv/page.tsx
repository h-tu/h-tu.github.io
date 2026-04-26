import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'CV' })

export default function CV() {
  const cvPath = '/static/files/Hongyu_Tu_CV_2026_Fall.pdf'

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Curriculum Vitae
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          My professional and academic experience.
        </p>
      </div>
      <div className="container py-12">
        <div className="pb-6 text-lg">
          <a
            href={cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
          >
            &rarr; Click here to view or download my latest CV (PDF)
          </a>
        </div>

        {/* 桌面端显示预览 */}
        <div className="hidden overflow-hidden rounded-lg border-2 border-gray-200 md:block dark:border-gray-800">
          <object data={cvPath} type="application/pdf" width="100%" height="1000px">
            {/* 这里的内容仅在 object 加载失败时显示 */}
            <div className="flex flex-col items-center justify-center bg-gray-50 p-20 dark:bg-gray-900">
              <p className="mb-4 text-center text-gray-600 dark:text-gray-400">
                Your browser's security settings are preventing the PDF preview.
              </p>
              <a
                href={cvPath}
                className="bg-primary-500 hover:bg-primary-600 rounded px-4 py-2 text-white transition"
              >
                Download PDF to View
              </a>
            </div>
          </object>
        </div>

        {/* 移动端提示 */}
        <div className="rounded-lg bg-gray-50 p-6 text-center md:hidden dark:bg-gray-900">
          <p className="text-gray-600 dark:text-gray-400">
            PDF preview is best viewed on a desktop browser.
          </p>
        </div>
      </div>
    </div>
  )
}
