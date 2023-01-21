---
to: src/components/<%= level %>/<%= name %>/<%= name %>.tsx
unless_exists: true
---
import type { <%= name %>Props } from './<%= name %>.types'

import styles from './<%= name %>.module.scss'

const <%= name %> = (props: <%= name %>Props) => {
  return (
    <>
    </>
  )
}

export default <%= name %>
