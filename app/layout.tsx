import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "yet-another-react-lightbox/styles.css";
import { Metadata } from "next";

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
  
  openGraph: {
    title: "Salman Adhikari | Full Stack Developer",
    description:
      "Passionate Full Stack Developer specializing in backend development, machine learning, and DevOps. Explore my portfolio to see my work and projects.",
    type: "website",
    url: "https://salmanad01.github.io/my-portfolio/",
    siteName: "Salman Adhikari Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dvdi2oaso/image/upload/v1743570686/Portfolio%20Assets/titlelogo_uvhiui.png.png",
        width: 1200,
        height: 630,
        alt: "Salman Adhikari Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Salman Adhikari | Full Stack Developer",
    description:
      "Passionate Full Stack Developer specializing in backend development, machine learning, and DevOps.",
    site: "@AdhikariSalman",
    images: ["https://res.cloudinary.com/dvdi2oaso/image/upload/v1743570686/Portfolio%20Assets/titlelogo_uvhiui.png"],
  },

  icons:{
    icon: "https://res.cloudinary.com/dvdi2oaso/image/upload/v1743570686/Portfolio%20Assets/titlelogo_uvhiui.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="2gkRHZ7fXLgMCNZUZQeTdp4SK6tvpLbawFcLJryFc2A" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body className={`body-page ${inter.className}`}>{children}</body>
    </html>
  );
}
