import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContextProvider";

const App = () => {
  return (
    <div>
      <AuthContextProvider children={<AppRouter />} />
    </div>
  );
};

export default App;
