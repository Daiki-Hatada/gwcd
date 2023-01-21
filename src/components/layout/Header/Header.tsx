import { FC } from 'react'
import styles from './Header.module.scss'
import { HeaderProps } from './Header.types'

const Header: FC<HeaderProps> = () => <header className={styles.root}>hello world</header>

export default Header
