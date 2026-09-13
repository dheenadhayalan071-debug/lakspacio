import "./globals.css";
import Navigation from "../components/Navigation";

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
      <body className="bg-brand-black text-white selection:bg-brand-blue selection:text-white min-h-screen flex flex-col pb-20 md:pb-0">
        <Navigation />
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
