import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContextProvider";

const App = () => {
  return (
    <div className="bg-[#23242a]">
      <AuthContextProvider children={<AppRouter />} />
    </div>
  );
};

export default App;
