import { ReactNode } from 'react'

interface CardDecoratorProps {
  children: ReactNode
}

const CardDecorator = ({ children }: CardDecoratorProps) => (
    <div className="relative mx-auto size-36 duration-200 bg-black text-white [--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-white)25%,transparent)] group-hover:bg-black/90">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
        />
        <div
            aria-hidden
            className="absolute inset-0 bg-gradient-radial from-transparent to-black/50 to-75%"
        />
        <div className="bg-black absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t border-white/20 text-white">{children}</div>
    </div>
)

export { CardDecorator }