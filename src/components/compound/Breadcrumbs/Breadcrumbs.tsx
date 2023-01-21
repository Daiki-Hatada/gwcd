import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { CLIENT_PATH } from '../../../constants/clientPath'
import { Icon, FlexBox } from '../../pure'
import styles from './Breadcrumbs.module.scss'
import { BreadcrumbsProps, ClientPath, PathWithTitle } from './Breadcrumbs.types'

export const PATHNAME_TO_LEADING_PATHS = {
  signin: ['/auth/signin'],
  signup: ['/auth/signup'],
  action: ['/auth/action'],
  password_reset: ['/auth/password-reset'],
  email_verify: ['/auth/email-verification'],
  admin: ['/admin'],
} as const satisfies { [key in string]: readonly ClientPath[] }

const REMOVED_PATHS = ['/articles/[articleId]']

type LastRoute = keyof typeof PATHNAME_TO_LEADING_PATHS
const isLastRoute = (value: unknown): value is LastRoute => Object.keys(PATHNAME_TO_LEADING_PATHS).includes(value as LastRoute)
const isClientPath = (value: unknown): value is ClientPath => Object.values(CLIENT_PATH)
    .map(({ path }) => path)
    .includes(value as ClientPath)

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const { style, pathWithTitles } = props
  const { t } = useTranslation()
  const router = useRouter()
  const translatedPathWithTitles = useMemo(() => {
    const translatedPathWithTitles: PathWithTitle[] = []
    const { pathname } = router
    if (isClientPath(pathname)) {
      const routes = pathname.split('/')
      const lastRoute = routes[routes.length - 1]
      const leadingPaths = isLastRoute(lastRoute) ? PATHNAME_TO_LEADING_PATHS[lastRoute] : undefined

      leadingPaths?.forEach((_path) => {
        translatedPathWithTitles.push({ path: pathname, title: t(`hello`) })
      })
    }

    pathWithTitles?.forEach((pathWithTitle) => {
      const title = `${pathWithTitle.title.slice(0, 18)  }...`
      translatedPathWithTitles.push({ path: pathWithTitle.path, title })
    })

    const filteredtranslatedPathWithTitles = translatedPathWithTitles.filter(
      (pathWithTitle) => !REMOVED_PATHS.includes(pathWithTitle.path),
    )

    return filteredtranslatedPathWithTitles
  }, [router, t, pathWithTitles])

  return (
    <div className={styles.root} style={style}>
      <FlexBox gap="0.5rem">
        <Link href="/">{t('hello')}</Link>
        {translatedPathWithTitles?.map(({ path, title }) => (
          <FlexBox key={path} gap="0.5rem">
            <FlexBox alignItems="center">
              <Icon iconName="arrowRight" size="small" />
            </FlexBox>
            <Link href={path}>{title}</Link>
          </FlexBox>
        ))}
      </FlexBox>
    </div>
  )
}

export default Breadcrumbs
