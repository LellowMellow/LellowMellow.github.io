import * as React from "react"
import { useState, useEffect } from "react"
import Icon from "../Icon/index.jsx"
import ReactDOMServer from "react-dom/server"
import { Helmet } from "react-helmet"
import { author } from "../../../blog-config.js"
import OgImageUrl from "../../assets/images/ogimage.png"

const Seo = ({ title, description, url, icon }) => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

  const iconColor = theme === "dark" ? "rgb(211, 211, 211)" : "#55534e"

  const iconSvg = ReactDOMServer.renderToStaticMarkup(
    <Icon iconName={icon} style={{ color: iconColor }} />
  )
  const iconDataUrl = `data:image/svg+xml,${encodeURIComponent(iconSvg)}`

  return (
    <Helmet>
      <meta charset="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OgImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OgImageUrl} />
      <meta name="theme-color" content="currentColor" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="transparent"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta
        name="google-site-verification"
        content="X5LYLMhPo_NbchN2Z4rbFrQRN5KdDG_Pa-FjD1TIPH0"
      />
      <link rel="icon" href={iconDataUrl} />
    </Helmet>
  )
}

export default Seo
