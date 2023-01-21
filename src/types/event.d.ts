type GASubmitEvent = {
  action: 'submit_form'
  category: 'submit'
  label: string
  value?: string
}

type GAClickEvent = {
  action: 'click'
  category: 'other'
  label: string
  value?: string
}

type GAEvent = GASubmitEvent | GAClickEvent

interface Window {
  gtag(type: 'config', googleAnalyticsId: string, { page_path: string })

  gtag(
    type: 'event',
    eventAction: string,
    fieldObject: {
      event_label: string
      event_category: string
      value?: string
    },
  )
}
