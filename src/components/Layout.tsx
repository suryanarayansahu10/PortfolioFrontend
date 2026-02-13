import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0B1F3A] text-gray-200">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
