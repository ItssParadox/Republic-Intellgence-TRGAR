/*
 * RECORDS / archival index
 * The phrase has a data-trace attribute.
 * The Styles panel carries the first portion of an address.
 * This file keeps the second and third portions separate.
 * Read the pieces in order, without spaces.
 */
(() => {
  const archive = Object.freeze({
    record: 'pastebin',
    extension: '.com/',
    index: ['vty', 'hun', 'JK']
  });

  // Optional breadcrumb for players exploring the Console.
  // The final location is not printed as a single clickable URL.
  window.inspectRecord = () => ({
    instruction: 'Prefix (CSS variable) + record + extension + index fragments',
    record: archive.record,
    extension: archive.extension,
    index: archive.index
  });
})();
