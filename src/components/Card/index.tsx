import {
  CardContainer,
  CardDescription,
  CardPublishedDate,
  CardTitle,
  LinkContainer,
} from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface CardProps {
  title: string
  description: string
  publishedDate: string
  linkTo: string
}

export const Card = ({
  title,
  description,
  publishedDate,
  linkTo,
}: CardProps) => {
  const formattedDate = formatDistanceToNow(new Date(publishedDate), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <LinkContainer href={linkTo}>
      <CardContainer>
        <CardPublishedDate>{formattedDate}</CardPublishedDate>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContainer>
    </LinkContainer>
  )
}
