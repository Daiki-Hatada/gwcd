---
to: src/components/<%= level %>/<%= name %>/index.ts
unless_exists: true
---
export { default as <%= name %> } from './<%= name %>'
