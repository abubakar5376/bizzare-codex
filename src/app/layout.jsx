
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./custom.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "Bizzare Codex",
  description: "Bizzare codex",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
