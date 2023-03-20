import {
  CardContainer,
  CardDescription,
  CardPublishedDate,
  CardTitle,
  LinkContainer,
} from './styles'
import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { utcToZonedTime } from 'date-fns-tz'

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
  const date = parseISO(publishedDate)
  const dateBr = utcToZonedTime(date, 'America/Sao_Paulo')
  const formattedDate = format(dateBr, "dd'/'MM'/'yyyy", {
    locale: ptBR,
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
