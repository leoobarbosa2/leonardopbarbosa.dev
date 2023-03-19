import Link from 'next/link'
import { GithubLogo, LinkedinLogo } from 'phosphor-react'
import {
  SocialinkList,
  SocialLinksContainer,
  CustomGithubIcon,
  CustomLinkedInIcon,
} from './styles'

const FOOTER_LINKS = [
  {
    name: 'LinkedIn logo containing link to profile',
    href: 'https://www.linkedin.com/in/leonardobarbosacp',
    icon: () => <CustomLinkedInIcon size={28} />,
  },
  {
    name: 'Github logo containing link to repository',
    href: 'https://github.com/leoobarbosa2',
    icon: () => <CustomGithubIcon size={28} />,
  },
]

export const SocialLinks = () => {
  return (
    <SocialLinksContainer>
      <SocialinkList>
        {FOOTER_LINKS.map((link) => (
          <li key={link.name}>
            <Link target="_blank" href={link.href}>
              {link.icon()}
            </Link>
          </li>
        ))}
      </SocialinkList>
    </SocialLinksContainer>
  )
}
