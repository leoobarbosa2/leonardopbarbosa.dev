import Link from 'next/link';
import Image from 'next/image';
import { GithubLogo, LinkedinLogo } from "phosphor-react"
import { FooterContainer, FooterLinkList } from './styles';

const FOOTER_LINKS = [
    {
        name: 'LinkedIn logo containing link to profile',
        href: 'https://www.linkedin.com/in/leonardobarbosacp',
        icon: () => <LinkedinLogo color='white' size={32} />
    },
    {
        name: 'Github logo containing link to repository',
        href: 'https://github.com/leoobarbosa2',
        icon: () => <GithubLogo color='white' size={32} />
    }
]

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinkList>
                {FOOTER_LINKS.map(link => (
                    <li key={link.name}>
                        <Link href={link.href}>
                            {link.icon()}
                        </Link>
                    </li>
                ))}
            </FooterLinkList>
        </FooterContainer>
    )
}