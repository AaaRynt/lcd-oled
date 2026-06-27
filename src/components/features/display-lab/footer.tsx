// src/components/features/display-lab/footer.tsx
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-zinc-50">Display Lab</p>
            <p className="mt-2 text-sm text-zinc-400">用更清楚的方式理解显示技术。</p>
          </div>
          <p className="text-sm text-zinc-400">React · Tailwind CSS · Lucide</p>
        </div>
        <p className="mt-8 border-t border-white/8 pt-5 text-xs text-zinc-500">页面内容描述的是常见技术特征，不代表所有具体产品。</p>
      </div>
    </footer>
  )
}
