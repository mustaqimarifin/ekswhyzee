export const getColorForSection = (section: string) => {
  switch (section) {
    case 'blog':
      return 'text-coyred';
    case 'notes':
      return 'var(--color-purple)';
    case 'books':
      return 'var(--color-blue)';
    case 'quotes':
      return 'text-coyYellow';
    default:
      return 'text-coyGreen';
  }
};

export const slugify = (string: { toString: () => string }) => {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};
