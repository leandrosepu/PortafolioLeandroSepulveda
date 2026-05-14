import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Leandro Sepúlveda - Cybersecurity Engineer & Ethical Hacker',
  description:
    'Professional cybersecurity portfolio. Specialized in offensive security, penetration testing, networks, and threat analysis.',
  keywords:
    'cybersecurity, ethical hacker, penetration testing, network security, Linux, Python, SOC',
  authors: [{ name: 'Leandro Sepúlveda' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://leandrosepulveda.dev',
    siteName: 'Leandro Sepúlveda - Cybersecurity',
    title: 'Leandro Sepúlveda - Cybersecurity Engineer & Ethical Hacker',
    description:
      'Professional cybersecurity portfolio showcasing projects, skills, and expertise in offensive security.',
    images: [
      {
        url: 'https://leandrosepulveda.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Leandro Sepúlveda Cybersecurity Portfolio',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#03040a" />
      </head>
      <body>{children}</body>
    </html>
  );
}
