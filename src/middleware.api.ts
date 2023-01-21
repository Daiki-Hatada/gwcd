import { NextMiddleware, NextResponse } from 'next/server'

import { CLIENT_PATH } from './constants/clientPath'
import { inspectIp } from './utils/ip'

const ALLOWED_IP_ADDRESSES = (() => {
  const ipAddresses = process.env.IP_ADDRESSES_ALLOWED_TO_ACCESS_ADMIN_PAGES?.split(',')
  return ipAddresses || []
})()

export const middleware: NextMiddleware = (request) => {
  if (request.nextUrl.pathname.startsWith(CLIENT_PATH.ADMIN.path)) {
    if (process.env.NODE_ENV === 'development') return // If server running locally, `ip` should be `undefined`.
    const isTargetIpAllowed = inspectIp(ALLOWED_IP_ADDRESSES, request.ip)
    if (isTargetIpAllowed) return
    return NextResponse.redirect(new URL(CLIENT_PATH.INDEX.path, request.url))
  }
}

export const config = {
  matcher: ['/admin/:path*'], // Template literal in a matcher is unsupported by Next.js
}
