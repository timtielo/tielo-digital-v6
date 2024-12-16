export function getSelectionParentElement(): HTMLElement | null {
  const selection = window.getSelection();
  if (!selection || !selection.rangeCount) return null;

  const range = selection.getRangeAt(0);
  let container = range.commonAncestorContainer;

  // Handle text nodes
  if (container.nodeType === 3) {
    container = container.parentNode;
  }

  return container as HTMLElement;
}

export function getClosestBlock(element: HTMLElement): HTMLElement {
  const blockTags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div'];
  let current = element;

  while (current && !blockTags.includes(current.tagName.toLowerCase())) {
    if (!current.parentElement) break;
    current = current.parentElement;
  }

  return current;
}