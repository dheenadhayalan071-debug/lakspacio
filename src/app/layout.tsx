import "./globals.css";

export const metadata = {
  title: "LAKSPACIO | Intelligent Access to Sports Space",
  description: "Find space. Play more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

