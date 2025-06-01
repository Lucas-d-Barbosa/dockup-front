import { AppRouter } from "./routes/AppRouter";

import "./styles/main.css";
import "./styles/theme.css";
import { AppProvider } from "./providers/AppProvider";
function App() {
  return (
    <div className="container">
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </div>
  );
}

export default App;
