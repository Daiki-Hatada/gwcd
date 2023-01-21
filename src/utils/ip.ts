import { Netmask } from 'netmask'
import { NextRequest } from 'next/server'

type IpAddress = string

export const inspectIp = (ips: IpAddress | IpAddress[], targetIp: NextRequest['ip']): boolean => {
  if (!targetIp) return false
  return (Array.isArray(ips) ? ips : [ips]).some((ip) => {
    const allowedSubnets = new Netmask(ip)
    return allowedSubnets.contains(targetIp)
  })
}
