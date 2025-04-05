import "../styles/globals.css";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Operação Olhos de Águia',
  description: 'Plataforma cidadã de transparência parlamentar',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
