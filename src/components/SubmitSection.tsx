export function SubmitSection() {
  return (
    <section id="submit" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
            border: '1px solid rgba(0, 212, 170, 0.2)',
          }}
        >
          {/* Background decoration */}
          <div
            className="absolute top-0 right-0 w-64 h-64 opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(0, 212, 170, 0.3) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />

          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                提交你的<span className="gradient-text">应用</span>
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">
                分享你的 Panabit 兼容应用，让更多人受益
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(10, 10, 15, 0.5)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: 'rgba(0, 212, 170, 0.1)' }}
                >
                  📦
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">准备应用包</h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  确保应用兼容 Panabit 系统，提供 arm64/x86/universal 架构版本
                </p>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(10, 10, 15, 0.5)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: 'rgba(99, 102, 241, 0.1)' }}
                >
                  📝
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">编写文档</h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  提供清晰的安装说明、功能介绍和更新日志
                </p>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(10, 10, 15, 0.5)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: 'rgba(245, 158, 11, 0.1)' }}
                >
                  🔍
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">代码审核</h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  提交到 GitHub 仓库，等待社区审核
                </p>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(10, 10, 15, 0.5)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: 'rgba(16, 185, 129, 0.1)' }}
                >
                  🚀
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">上架发布</h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  审核通过后即可在商店中展示
                </p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://github.com/DefaWong/panabit-apps/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dim) 100%)',
                  boxShadow: '0 4px 20px rgba(0, 212, 170, 0.3)',
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                前往 GitHub 提交
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
