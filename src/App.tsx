import { AppRouter } from "./routes/AppRouter";

import "./styles/main.css";
import "./styles/theme.css";
import { AppProvider } from "./providers/AppProvider";
import { UserProvider } from "./contexts/UserContext/UserContext";
function App() {
  return (
    <div className="container">
      <UserProvider>
        <AppProvider>
          <AppRouter />
        </AppProvider>
      </UserProvider>
    </div>
  );
}

export default App;
