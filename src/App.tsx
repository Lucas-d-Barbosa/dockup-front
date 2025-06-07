import { AppRouter } from "./routes/AppRouter";

import "./styles/main.css";
import "./styles/theme.css";
import { AppProvider } from "./providers/AppProvider";
import { UserProvider } from "./contexts/UserContext/UserContext";
import { FilesProvider } from "./contexts/FileContext/FileProvider";
function App() {
  return (
    <div className="container">
      <FilesProvider>
        <UserProvider>
          <AppProvider>
            <AppRouter />
          </AppProvider>
        </UserProvider>
      </FilesProvider>
    </div>
  );
}

export default App;
