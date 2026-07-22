import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ritesh Shantaram Pawar | Full-Stack Developer",
  description:
    "An immersive futuristic portfolio for Ritesh Pawar, full-stack developer and computer engineering student.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Ritesh Shantaram Pawar | Full-Stack Developer",
    description:
      "Explore projects, skills, certifications, and contact through a cinematic 3D portfolio experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html,body{margin:0;background:#050505;color:#fff;font-family:Inter,Segoe UI,Arial,sans-serif}
              main{min-height:100vh;background:#050505;color:#fff}
              img{max-width:100%;height:auto}
              a{color:inherit;text-decoration:none}
              button,input,textarea{font:inherit}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
