import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <div className='my-5'>{children}</div>
      <Footer />
    </>
  );
}
