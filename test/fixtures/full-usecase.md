<!--
SPDX-FileCopyrightText: 2023 Kevin de Jong <monkaii@hotmail.com>
SPDX-License-Identifier: MIT
-->

# Heading 1

Multiline paragraph
consisting of multiple
lines

---

<div>
  <b>Lets test some HTML</b>
</div>

## Lists
This chapter contains lists:
* List item 1.1
  * Item 1.1.1
    * Item 1.1.1.1

      We can add more details
    * Item 1.1.1.2

      And here

      Which is providing multiple empty lines
* List item 1.2
* List item 1.3
  which is a list spanning multiple lines and paragraphs.

  And includes block items;

  ```typescript
  function doit(stair: Stair): Stair[] {
    return stair.split("CENTER") as Stair[];
  }
  ```
* List item 1.4
  
  This one contains lists in lists

  * Item A
  * Item B

  Which is seperated from

  * Item C
  * Item D

## Formatting

- This **word** uses bold formatting
- This *word* uses italic formatting
- This ~~word~~ uses strikethrough formatting
- This `word` has inline code formatting

## Quotes

> This is a quote
> spanning multiple lines

## Inline refs

- This line contains [a link with description](http://does-not-exist)
- This line contains a link without description: http://does-not-exist
- This line embeds an image with alt text: ![image](path-to-image.png)

## Checkboxes

- [ ] This is unchecked
- [x] This is checked

## Tables

| Col 1 | Col 2 | Col 3 |
| ----- | ----- | ----- |
| Value A | Second column | Last one |
| First one | Second column | Value B |

## Code blocks

```typescript
function doit(stair: Stair): Stair[] {
  return stair.split("CENTER") as Stair[];
}
```