export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
              }}
            >
              <span className="text-sm">🚀</span>
            </div>
            <span className="text-white font-semibold">Panabit App Store</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-[var(--color-text-muted)]">
            <a
              href="https://github.com/panabit/app-store"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              文档
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              问题反馈
            </a>
          </div>

          <div className="text-sm text-[var(--color-text-muted)]">
            © 2026 Panabit App Store. 社区驱动项目
          </div>
        </div>
      </div>
    </footer>
  );
}
