import Link from 'next/link'
import { navItems } from '@/lib/links'

export default function FooterSection() {
    return (
        <footer className="border-b bg-[#FBFBF2] py-12 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-wrap justify-between gap-6">
                    <span className="text-muted-foreground order-last block text-center text-sm md:order-first">© {new Date().getFullYear()} Rent N' Go, All rights reserved</span>
                    <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
                        {navItems.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-muted-foreground hover:text-primary block duration-150">
                                <span>{link.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}