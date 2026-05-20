import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * A2P 10DLC compliance:
 * The chat widget must be the ONLY SMS opt-in method on any page where it appears.
 * So we do NOT load it on pages that have a phone/SMS form.
 */
const EXCLUDED_PATHS = ['/get-a-estimate']

const WIDGET_ID = '6a0db78957ddb484012d12c2'
const WIDGET_SRC = 'https://widgets.leadconnectorhq.com/loader.js'
const RESOURCES_URL = 'https://widgets.leadconnectorhq.com/chat-widget/loader.js'

export default function ChatWidget() {
  const { pathname } = useLocation()
  const shouldLoad = !EXCLUDED_PATHS.includes(pathname)

  useEffect(() => {
    const existingScript = document.querySelector(
      `script[data-widget-id="${WIDGET_ID}"]`,
    )

    if (!shouldLoad) {
      // On excluded pages: tear down the script + any DOM the widget injected
      existingScript?.remove()
      document
        .querySelectorAll(
          [
            '[id*="leadconnector"]',
            '[id*="lc_text_widget"]',
            '[class*="lc-chat"]',
            'iframe[src*="leadconnectorhq"]',
          ].join(','),
        )
        .forEach((el) => el.remove())
      return
    }

    // Already loaded? Skip re-injection
    if (existingScript) return

    const script = document.createElement('script')
    script.src = WIDGET_SRC
    script.async = true
    script.setAttribute('data-resources-url', RESOURCES_URL)
    script.setAttribute('data-widget-id', WIDGET_ID)
    script.setAttribute('data-source', 'WEB_USER')
    document.body.appendChild(script)
  }, [shouldLoad, pathname])

  return null
}
