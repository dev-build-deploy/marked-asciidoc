/*
 * SPDX-FileCopyrightText: 2023 Kevin de Jong <monkaii@hotmail.com>
 * SPDX-License-Identifier: MIT
 */

/**
 * An AsciiDoc renderer for Marked.
 *
 * @see https://www.npmjs.com/package/marked
 */
export const AsciiDoc = {
  /*
   * Block-level renderer methods
   */

  /** @returns a code block */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  code(code: string, language: string | undefined, _isEscaped: boolean): string {
    return `[source,${language}]\n----\n${code}\n----\n\n`;
  },

  /** @returns a quote block */
  blockquote(quote: string): string {
    return `[quote]\n----\n${quote
      .split(/\r?\n/)
      .filter(line => line.trim().length > 0)
      .join("\n")}\n----\n\n`;
  },

  /** @returns unmodified HTML */
  html(html: string): string {
    if (html.trim().startsWith("<!--") && html.trim().endsWith("-->")) {
      return html.replace("<!--", "////").replace("-->", "////");
    }

    return `++++\n${html.trimEnd()}\n++++\n\n`;
  },

  /**
   * NOTE: heading of depth 1 will enforce an empty line after
   *       the heading as that line is reseverd for document metadata)
   * @returns heading
   * */
  heading(text: string, level: number): string {
    return `${"=".repeat(level)} ${text}\n${level === 1 ? "\n" : ""}`;
  },

  /** @returns a horizontal ruler */
  hr(): string {
    return "'''\n\n";
  },

  /** @returns a list, followed by an empty line */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  list(body: string, _ordered: boolean): string {
    return `${body}\n`;
  },

  /** @returns a list item prefixed with '*' */
  listitem(text: string): string {
    return `* ${text.trimEnd().replace(/^\r?\n/gm, "+\n")}\n`;
  },

  /** @returns a checkbox */
  checkbox(checked: boolean): string {
    return `[${checked ? "x" : " "}]`;
  },

  /** @returns a paragraph of text */
  paragraph(text: string): string {
    return `${text}\n\n`;
  },

  /** @returns a simple table */
  table(header: string, body: string): string {
    const headerElements = header.split("|").filter(element => element.trim().length > 0);
    let table = `|===\n|${headerElements.join("|").trimEnd()}\n\n`;
    table += `${body
      .split(/\r?\n/)
      .map(l => l.trimEnd())
      .join("\n")}|===\n\n`;
    return table;
  },

  /** @returns a single table row */
  tablerow(content: string): string {
    return `${content}\n`;
  },

  /** @returns a single table cell */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  tablecell(content: string, _flags: { header: boolean; align: string | null }): string {
    return `| ${content} `;
  },

  /*
   * Inline-level renderer methods
   */

  /** @returns string formatted in bold */
  strong(text: string): string {
    return `**${text}**`;
  },

  /** @returns string formatted in italic */
  em(text: string): string {
    return `__${text}__`;
  },

  /** @returns string formatted as code */
  codespan(text: string): string {
    return `\`${text}\``;
  },

  /** @returns single new line */
  br(): string {
    return "\n";
  },

  /** @returns string formatted with strikethrough */
  del(text: string): string {
    return `[.line-through]#${text}#`;
  },

  /** @returns an interactive link */
  link(href: string, _title: string | null | undefined, text: string): string {
    return text !== href ? `${href}[${text}]` : href;
  },

  /** @returns an inline image */
  image(href: string, _title: string | null | undefined, text: string): string {
    return `image:${href}[${text ?? "img"}]`;
  },

  /** @returns a string */
  text(text: string): string {
    return text;
  },
};
