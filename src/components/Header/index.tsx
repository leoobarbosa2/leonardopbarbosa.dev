import Image from 'next/image'
import { HeaderContainer, Menu, MenuContainer, CustomLink } from './styles'
import logo from '../../assets/app-logo.svg'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NAV_LINKS = [
    {
        title: 'hello',
        href: '/'
    },
    {
        title: 'blog',
        href: '/posts'
    }
]

export const Header = () => {
    const router = useRouter();

    const isRouteActive = (href: string) => {
        return router.pathname === href;
    }

    return (
        <HeaderContainer>
            <MenuContainer>
            <Link href="/">
            <Image 
                src={logo}
                alt=""
             />
            </Link>
            <nav>
                <Menu>
                    {NAV_LINKS.map(link => (
                    <li key={link.href}>
                        <CustomLink isLinkActive={isRouteActive(link.href)} href={link.href}>
                            {link.title}
                        </CustomLink>
                    </li>
                    ))}
                </Menu>
            </nav>
            </MenuContainer>
        </HeaderContainer>
    )
}