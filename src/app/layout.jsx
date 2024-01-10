import Header from 'components/shared/header';

import 'styles/global.css';

// eslint-disable-next-line react/prop-types
const RootLayout = ({ children }) => (
  <html lang="en">
    <body className="bg-black text-gray-98 font-roboto">
      <Header />
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
