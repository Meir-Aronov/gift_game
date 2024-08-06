import classes from './windowLayout.module.css'

type WindowLayoutProps = {
    children?: React.ReactNode
}

export default function WindowLayout({children}: WindowLayoutProps) {
  return (
    <div className={classes.windowLayoutContainer}>
      {children}
    </div>
  )
}
