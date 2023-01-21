export type SendEmailRequestBody = {
  from: string
  to: string | string[]
  cc?: string[]
  bcc?: string[]
  subject: string
} & (
  | {
      text?: string
      html: string
    }
  | {
      text: string
      html?: string
    }
)

export const isSendEmailRequestBody = (data: unknown): data is SendEmailRequestBody => {
  const { from, to, cc, bcc, subject, text, html } = data as SendEmailRequestBody
  if (!(typeof from === 'string')) {
    console.error('`from`: Expected a string', { from })
    return false
  }
  if (typeof to !== 'string' && !(Array.isArray(to) && to.map((element) => typeof element === 'string'))) {
    console.error('`to`: Expected an array of string', { to })
    return false
  }
  if (cc !== undefined && !(Array.isArray(cc) && cc.map((element) => typeof element === 'string'))) {
    console.error('`cc`: Expected an array of string or undefined', { cc })
    return false
  }
  if (bcc !== undefined && !(Array.isArray(bcc) && bcc.map((element) => typeof element === 'string'))) {
    console.error('`bcc`: Expected an array of string or undefined', { bcc })
    return false
  }
  if (!(typeof subject === 'string')) {
    console.error('`subject`: Expected a string', { subject })
    return false
  }
  if (
    !(
      (typeof text === 'string' && text.length > 0 && html === undefined) ||
      (text === undefined && typeof html === 'string' && html.length > 0)
    )
  ) {
    console.error(
      '`text`, `html`: One must be string whose length is greater than zero and the other must be `undefined`',
      { text, html },
    )
    return false
  }
  return true
}
