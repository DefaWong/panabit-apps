import { apps, categories } from '../data/apps';

// 计算开发者人数（根据 author 去重）
const uniqueAuthors = new Set(apps.map(app => app.author));
const authorCount = uniqueAuthors.size;

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient mesh */}
        <div
          className="absolute inset-0 animate-gradient"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, rgba(0, 212, 170, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(99, 102, 241, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(0, 212, 170, 0.05) 0%, transparent 70%)
            `,
          }}
        />
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 170, 0.1) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animationDelay: '0s',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animationDelay: '-3s',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-slide-up"
          style={{
            background: 'rgba(0, 212, 170, 0.1)',
            border: '1px solid rgba(0, 212, 170, 0.2)',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
          <span className="text-sm text-[var(--color-primary)] font-mono">
            已收录 {apps.length} 个应用
          </span>
        </div>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up"
          style={{ animationDelay: '100ms' }}
        >
          <span className="text-white">Panabit</span>
          <br />
          <span className="gradient-text">三方应用商店</span>
        </h1>

        <p
          className="text-lg sm:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up"
          style={{ animationDelay: '200ms' }}
        >
          发现、下载和分享 Panabit 兼容的 DIY 应用
          <br className="hidden sm:block" />
          由社区驱动，为网络工程师打造
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: '300ms' }}
        >
          <a
            href="#apps"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dim) 100%)',
              boxShadow: '0 4px 20px rgba(0, 212, 170, 0.3)',
            }}
          >
            浏览应用
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          <a
            href="#submit"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            提交应用
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex items-center justify-center gap-8 sm:gap-16 mt-16 pt-8 border-t border-[var(--color-border)] animate-slide-up"
          style={{ animationDelay: '400ms' }}
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">{apps.length}</div>
            <div className="text-sm text-[var(--color-text-muted)]">应用</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">3</div>
            <div className="text-sm text-[var(--color-text-muted)]">架构支持</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">{categories.length - 1}</div>
            <div className="text-sm text-[var(--color-text-muted)]">分类</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">{authorCount}</div>
            <div className="text-sm text-[var(--color-text-muted)]">开发者</div>
          </div>
        </div>
      </div>
    </section>
  );
}
