export const GOOGLE_ANALYTICS_ID: string = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? ''

// measure page view
export const pageview = (path: string) => {
  window.gtag('config', GOOGLE_ANALYTICS_ID, {
    page_path: path,
  })
}

// trigger google analytics event
export const event = ({ action, category, label, value = '' }: GAEvent) => {
  if (!GOOGLE_ANALYTICS_ID) {
    return
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  })
}
