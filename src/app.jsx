import { useAppProps } from "./app.props"
import { Home } from "./components/home"
import { hoc } from "./utils"
export const App = hoc(useAppProps, () => {
  return <Home />;
});