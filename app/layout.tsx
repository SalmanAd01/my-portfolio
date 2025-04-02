import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "yet-another-react-lightbox/styles.css";
import { Metadata } from "next";
import { Author } from "next/dist/lib/metadata/types/metadata-types";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Salman Adhikari | Full Stack Developer",
  description:
    "Passionate Full Stack Developer specializing in backend development, machine learning, and DevOps. Explore my portfolio to see my work and projects.",
  authors: [
    {
      url: "https://github.com/SalmanAd01",
      name: "Salman Adhikari",
    },
  ],
  keywords:
    "Salman Adhikari, Full Stack Developer, Backend Developer, Machine Learning, DevOps, Software Engineer, Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title?.toString()}</title>
        <meta name="description" content={metadata.description!} />
        <meta name="author" content={(metadata.authors as Author[])[0]!.name} />
        <meta name="keywords" content={metadata.keywords?.toString()} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link rel="icon" href="/images/titlelogo.png" />
      </head>
      <body className={`body-page ${inter.className}`}>{children}</body>
    </html>
  );
}
