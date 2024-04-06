import { Input } from "./components/ui/input";
import "./styles/global.css";
import domo from "ryuu.js";

function App() {
  return (
    <div className="flex h-full flex-col px-4">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        People stopped telling jokes
      </h4>
      <Input type="email" placeholder="Email" />
    </div>
  );
}

export default App;
