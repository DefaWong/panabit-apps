export interface DownloadLink {
  architecture: 'arm64' | 'x86' | 'universal';
  url: string;
  size: string;
}

export interface UpdateRecord {
  version: string;
  date: string;
  changes: string[];
}

export interface App {
  id: string;
  name: string;
  description: string;
  icon: string;
  author: string;
  publishDate: string;
  lastUpdate: string;
  version: string;
  category: string;
  tags: string[];
  downloads: DownloadLink[];
  updateHistory: UpdateRecord[];
}

// 获取应用图标路径（引用本仓库 public/apps/{id}/icon.png）
// 使用相对路径以兼容 GitHub Pages
export function getAppIconPath(id: string): string {
  return `apps/${id}/icon.png`;
}

// 获取应用下载路径（引用本仓库 public/apps/{id}/downloads/）
export function getAppDownloadPath(id: string, filename: string): string {
  return `apps/${id}/downloads/${filename}`;
}

export const apps: App[] = [
  {
    id: 'panabit-adguard-home',
    name: 'AdGuard Home',
    description: 'AdGuard Home 是网络范围内的广告和跟踪拦截软件，可作为 DNS 服务器和 DHCP 服务器使用，为所有连接设备提供广告拦截和隐私保护功能。',
    icon: getAppIconPath('panabit-adguard-home'),
    author: 'AdGuard',
    publishDate: '2026-02-26',
    lastUpdate: '2026-03-02',
    version: '2026.03.02',
    category: '网络工具',
    tags: ['DNS', '广告拦截', '隐私保护'],
    downloads: [
      { architecture: 'arm64', url: getAppDownloadPath('panabit-adguard-home', 'panabit-adguard-home-arm64-20260302.184349.apx'), size: '9.6 MB' },
      { architecture: 'x86', url: getAppDownloadPath('panabit-adguard-home', 'panabit-adguard-home-amd64-20260302.184349.apx'), size: '10.9 MB' },
    ],
    updateHistory: [
      { version: '2026.03.02', date: '2026-03-02', changes: ['更新 AdGuard Home 核心版本', '支持一键重置'] },
      { version: '2026.02.26', date: '2026-02-26', changes: ['初始发布', '支持 arm64 和 x86 架构'] },
    ],
  },
  {
    id: 'panabit-smartdns',
    name: 'SmartDNS',
    description: 'SmartDNS 是一个本地 DNS 服务器，通过获取最快的网站 IP 地址，为用户提供最佳的上网体验。支持 DoH、DoT、DoQ 等加密 DNS 协议。',
    icon: getAppIconPath('panabit-smartdns'),
    author: 'pymumu',
    publishDate: '2026-02-26',
    lastUpdate: '2026-02-26',
    version: '2026.02.26',
    category: '网络工具',
    tags: ['DNS', '分流', '网络优化'],
    downloads: [
      { architecture: 'arm64', url: getAppDownloadPath('panabit-smartdns', 'panabit-smartdns-arm64-20260226.194409.apx'), size: '1.9 MB' },
      { architecture: 'x86', url: getAppDownloadPath('panabit-smartdns', 'panabit-smartdns-amd64-20260226.194410.apx'), size: '2.0 MB' },
    ],
    updateHistory: [
      { version: '2026.02.26', date: '2026-02-26', changes: ['初始发布', '支持 arm64 和 x86 架构', '集成 SmartDNS 核心功能'] },
    ],
  },
  {
    id: 'panabit-relay',
    name: '直播网关',
    description: '直播网关，适用于RTMP直播推流和远程拉流本地分发场景，实现公网单播源局域网内单播、组播分发，节省带宽',
    icon: getAppIconPath('panabit-relay'),
    author: 'panabit-community',
    publishDate: '2026-01-03',
    lastUpdate: '2026-01-13',
    version: '2026.01.13',
    category: '网络工具',
    tags: ['中继', 'RTMP', '负载均衡', '推流', '拉流'],
    downloads: [
      { architecture: 'universal', url: getAppDownloadPath('panabit-relay', 'panabit-relay-20260113.170333.apx'), size: '3.7 MB' },
    ],
    updateHistory: [
      { version: '2026.01.13', date: '2026-01-13', changes: ['支持拉黑客户端', '修复内存泄漏问题'] },
      { version: '2026.01.08', date: '2026-01-08', changes: ['优化分类展示', '支持音画同步开关'] },
    ],
  },
  {
    id: 'panabit-dynamic-sync',
    name: 'Dynamic Sync 动态同步',
    description: 'Dynamic Sync 提供域名群组和 IP 群组动态同步功能，支持从外部源自动更新域名列表和 IP 分组信息，适用于动态 IP 和域名管理场景。',
    icon: getAppIconPath('panabit-dynamic-sync'),
    author: 'panabit-community',
    publishDate: '2026-03-04',
    lastUpdate: '2026-03-05',
    version: '2026.03.05',
    category: '系统工具',
    tags: ['同步', '动态域名', '自动化'],
    downloads: [
      { architecture: 'arm64', url: getAppDownloadPath('panabit-dynamic-sync', 'panabit-dynamic-group-sync-arm64-20260305.112624.apx'), size: '2.4 MB' },
      { architecture: 'x86', url: getAppDownloadPath('panabit-dynamic-sync', 'panabit-dynamic-group-sync-amd64-20260305.112625.apx'), size: '2.7 MB' },
    ],
    updateHistory: [
      { version: '2026.03.05', date: '2026-03-05', changes: ['新增 IP 群组动态组同步功能', '优化同步性能'] },
      { version: '2026.03.04', date: '2026-03-04', changes: ['初始发布', '域名动态同步功能'] },
    ],
  },
  {
    id: 'panabit-iperf3',
    name: 'iPerf3 网络测速',
    description: 'iPerf3 是网络性能测试工具，用于测量网络带宽和网络质量。支持 TCP、UDP 和 SCTP 协议，可用于测试网络吞吐量、丢包率和抖动。',
    icon: getAppIconPath('panabit-iperf3'),
    author: 'ESnet',
    publishDate: '2026-01-09',
    lastUpdate: '2026-01-09',
    version: '2026.01.09',
    category: '网络工具',
    tags: ['测速', '性能测试', '网络诊断'],
    downloads: [
      { architecture: 'universal', url: getAppDownloadPath('panabit-iperf3', 'panabit-iperf3-20260109.190452.apx'), size: '155 KB' },
    ],
    updateHistory: [
      { version: '2026.01.09', date: '2026-01-09', changes: ['初始发布', '集成 iPerf3 核心功能', 'Universal 架构支持'] },
    ],
  },
];

export const categories = ['全部', '网络工具', '系统工具', '监控工具', '安全工具', '分析工具'];
