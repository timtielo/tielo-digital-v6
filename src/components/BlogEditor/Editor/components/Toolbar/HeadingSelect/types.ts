export interface HeadingOptionType {
  value: string;
  label: string;
  className: string;
  tag: 'p' | 'h1' | 'h2' | 'h3' | 'h4';
  shortcut?: string;
}