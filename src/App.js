import { userObserver } from "./auth/firebase";
import AppRouter from "./router/AppRouter";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    userObserver();
  }, []);
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
