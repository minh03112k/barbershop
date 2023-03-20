import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div style={{minHeight: '100vh'}}>{children}</div>
      <Footer />
    </>
  );
}
