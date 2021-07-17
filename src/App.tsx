import { GlobalStyles } from './styles/global';

import Typography from './atoms/Typography';

export function App() {
  return (
    <>
      <Typography.Title as="h1">teste</Typography.Title>
      <Typography.Text as="p">teste de paragrafo</Typography.Text>
      <GlobalStyles />
    </>
  );
}
