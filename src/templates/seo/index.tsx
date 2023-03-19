import Head from 'next/head';
import { ReactNode } from 'react';

interface SEOContainerProps {
    title: string;
    description: string;
    children: ReactNode;
}

export const SEOContainer = ({ title, description, children }: SEOContainerProps) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
            </Head>
            {children}
        </div>
    )
}