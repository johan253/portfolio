import * as React from 'react'
export function TypographyTitle({ className, children }: { className?: string, children?: React.ReactNode }) {
  return (
    <h1 className={className + " scroll-m-20 text-center text-6xl font-extrabold tracking-tight"}>
      {children}
    </h1>
  )
}
export function TypographyH1({ className, children }: { className?: string, children?: React.ReactNode }) {
  return (
    <h1 className={className + " scroll-m-20 text-balance text-4xl font-extrabold tracking-tight"}>
      {children}
    </h1>
  )
}
export function TypographyH2({ className, children }: { className?: string, children?: React.ReactNode }) {
  return (
    <h2 className={className + " scroll-m-20 pb-2 text-3xl font-bold tracking-tight first:mt-0"}>
      {children}
    </h2>
  )
}
export function TypographyH3({ className, children }: { className?: string, children?: React.ReactNode }) {
  return (
    <h3 className={className + " scroll-m-20 text-2xl font-semibold tracking-tight"}>
      {children}
    </h3>
  )
}
export function TypographyH4({ className, children }: { className?: string, children?: React.ReactNode }) {
  return (
    <h4 className={className + " scroll-m-20 text-xl font-semibold tracking-tight"}>
      {children}
    </h4>
  )
}
export function TypographyP({ className, children }: { className?: string, children?: React.ReactNode }) {
  return (
    <p className={className + " leading-6"}>
      {children}
    </p>
  )
}
export function TypographyInlineCode({ className, children }: { className?: string, children?: React.ReactNode }) {
  return (
    <code className={className + " relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"}>
      {children}
    </code>
  )
}
export function TypographyMuted({ className, children }: { className?: string, children?: React.ReactNode }) {
  return (
    <p className={className + " text-sm text-muted-foreground"}>
      {children}
    </p>
  )
}
