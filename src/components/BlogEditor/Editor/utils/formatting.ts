export function formatBlock(command: string, value?: string) {
  document.execCommand(command, false, value);
}

export function getSelectionParentElement() {
  const selection = window.getSelection();
  if (!selection || !selection.rangeCount) return null;

  let parent = selection.getRangeAt(0).commonAncestorContainer;
  return parent.nodeType === 3 ? parent.parentElement : parent as HTMLElement;
}

export function getCurrentBlockType() {
  const parent = getSelectionParentElement();
  if (!parent) return 'p';
  
  const tag = parent.tagName.toLowerCase();
  return ['h1', 'h2', 'h3', 'h4', 'p'].includes(tag) ? tag : 'p';
}