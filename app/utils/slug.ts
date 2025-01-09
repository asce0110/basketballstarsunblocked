export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // 移除特殊字符
    .replace(/\s+/g, '-')         // 将空格替换为横杠
    .replace(/-+/g, '-')          // 移除多余的横杠
    .trim();                      // 移除首尾空格
}

export function getGameTitleFromSlug(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
} 