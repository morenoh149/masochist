---
tags: vim recipe bom
---

Show whether current file has a BOM:

    :set bomb?

Remove BOM and write out file to disk:

    :set nobomb
    :w