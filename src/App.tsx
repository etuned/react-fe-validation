import { UserRegistration } from "./components/UserRegistration";
import "./assets/App.css";

export function App() {
  return (
    <main className="main">
      <h1>User Registration</h1>
      <div className="container">
        <UserRegistration />
      </div>
    </main>
  );
}
