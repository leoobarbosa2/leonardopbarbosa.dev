import { Header } from "@/components/Header"
import { ReactNode } from "react"

import { Container } from "./styles"

interface DefaultLayoutProps {
    children: ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <>
         <Header />
            <Container>
                {children}
            </Container>
        </>  
    )
}