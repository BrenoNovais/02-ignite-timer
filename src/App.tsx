import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaltTheme } from "./styles/themes/defalt";

export function App() {
  return (
    <ThemeProvider theme={defaltTheme}>
      <Button variant="primary" />
      <Button variant="secundary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />
    </ThemeProvider>
  )
}

