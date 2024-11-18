import App from "./App";
import "./App.css";
import { AppRouter } from "./AppRouter";
import { GlobalProvider } from "./context/global.provider";

function AppHookContainer() {
  return (
    <GlobalProvider>
      <App>
        <AppRouter />
      </App>
    </GlobalProvider>
  );
}

export default AppHookContainer;
