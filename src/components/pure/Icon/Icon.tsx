import classNames from 'classnames'
import { FC } from 'react'

import Accounts from '../../../assets/icons/accounts.svg'
import Add from '../../../assets/icons/add.svg'
import ArrowRight from '../../../assets/icons/arrow_right.svg'
import ArrowRightCircle from '../../../assets/icons/arrow_right_circle.svg'
import CheckedEmail from '../../../assets/icons/checed_email.svg'
import CheckMark from '../../../assets/icons/check_mark.svg'
import Checked from '../../../assets/icons/checked.svg'
import ChevronUp from '../../../assets/icons/chevron_up.svg'
import CircleChevronDown from '../../../assets/icons/circle_chevron_down.svg'
import CircleChevronUp from '../../../assets/icons/circle_chevron_up.svg'
import Toggle from '../../../assets/icons/circle_down.svg'
import Close from '../../../assets/icons/close.svg'
import Complete from '../../../assets/icons/complete.svg'
import Copy from '../../../assets/icons/copy.svg'
import Delete from '../../../assets/icons/delete.svg'
import DotMenu from '../../../assets/icons/dot_menu.svg'
import Download from '../../../assets/icons/download.svg'
import Edit from '../../../assets/icons/edit_pen.svg'
import Ellipsis from '../../../assets/icons/ellipsis.svg'
import Event from '../../../assets/icons/event.svg'
import File from '../../../assets/icons/file.svg'
import Filter from '../../../assets/icons/filter.svg'
import Flag from '../../../assets/icons/flag.svg'
import Admin from '../../../assets/icons/groups.svg'
import Invalid from '../../../assets/icons/invalid.svg'
import LeftDoubleAllow from '../../../assets/icons/left_double_arrow.svg'
import Link from '../../../assets/icons/link.svg'
import List from '../../../assets/icons/list.svg'
import Live from '../../../assets/icons/live.svg'
import Reload from '../../../assets/icons/load.svg'
import Lock from '../../../assets/icons/lock.svg'
import SignOut from '../../../assets/icons/logout.svg'
import User from '../../../assets/icons/manage_accounts.svg'
import Mic from '../../../assets/icons/mic.svg'
import Moon from '../../../assets/icons/moon.svg'
import Next from '../../../assets/icons/next.svg'
import NotAllowPin from '../../../assets/icons/not_allow_pin.svg'
import People from '../../../assets/icons/people.svg'
import Pin from '../../../assets/icons/pin.svg'
import Previous from '../../../assets/icons/previous.svg'
import Questionnaire from '../../../assets/icons/questionnaire.svg'
import RightDoubleAllow from '../../../assets/icons/right_double_arrow.svg'
import RowBorder from '../../../assets/icons/row-border.svg'
import RowDot from '../../../assets/icons/row-dot.svg'
import Rss from '../../../assets/icons/rss.svg'
import Search from '../../../assets/icons/search.svg'
import Send from '../../../assets/icons/send.svg'
import SimpleUpload from '../../../assets/icons/simple_upload.svg'
import SixDot from '../../../assets/icons/six_dot.svg'
import Sorter from '../../../assets/icons/sorter.svg'
import Sun from '../../../assets/icons/sun.svg'
import Unchecked from '../../../assets/icons/unchecked.svg'
import Upload from '../../../assets/icons/upload.svg'
import Valid from '../../../assets/icons/valid.svg'
import Menu from '../../../assets/icons/view_sidebar.svg'
import { COLOR } from '../../../constants/color'
import { colorToVar } from '../../../utils/colors'
import styles from './Icon.module.scss'

import type { IconProps } from './Icon.types'

const ICONS = {
  admin: <Admin />,
  signOut: <SignOut />,
  lock: <Lock />,
  menu: <Menu />,
  mic: <Mic />,
  reload: <Reload />,
  send: <Send />,
  toggle: <Toggle />,
  user: <User />,
  edit: <Edit />,
  dotMenu: <DotMenu />,
  complete: <Complete />,
  close: <Close />,
  circleChevronUp: <CircleChevronUp />,
  circleChevronDown: <CircleChevronDown />,
  file: <File />,
  filter: <Filter />,
  search: <Search />,
  checked: <Checked />,
  unchecked: <Unchecked />,
  list: <List />,
  chevronUp: <ChevronUp />,
  rowDot: <RowDot />,
  add: <Add />,
  leftDoubleArrow: <LeftDoubleAllow />,
  rightDoubleArrow: <RightDoubleAllow />,
  event: <Event />,
  rss: <Rss />,
  questionnaire: <Questionnaire />,
  arrowRightCircle: <ArrowRightCircle />,
  ellipsis: <Ellipsis />,
  next: <Next />,
  previous: <Previous />,
  delete: <Delete />,
  sixDot: <SixDot />,
  copy: <Copy />,
  checkedEmail: <CheckedEmail />,
  accounts: <Accounts />,
  upload: <Upload />,
  simpleUpload: <SimpleUpload />,
  download: <Download />,
  live: <Live />,
  pin: <Pin />,
  notAllowPin: <NotAllowPin />,
  sorter: <Sorter />,
  link: <Link />,
  sun: <Sun />,
  moon: <Moon />,
  checkMark: <CheckMark />,
  people: <People />,
  flag: <Flag />,
  arrowRight: <ArrowRight />,
  rowBorder: <RowBorder />,
  invalid: <Invalid />,
  valid: <Valid />,
} as const

export type IconName = keyof typeof ICONS

const Icon: FC<IconProps> = ({
  className,
  iconName,
  color = COLOR.GRAY_DARKER,
  size = 'medium',
  reversed,
  ...props
}) => (
    <div
      className={classNames(styles.root, styles[size], { [styles.reversed]: reversed }, className)}
      style={{ color: colorToVar(color) }}
      {...props}
    >
      {ICONS[iconName]}
    </div>
  )
export { ICONS as _ICONS }
export default Icon
