import "./styles.css";
import Header from './Header'
import SideBar from "./SideBar";
import ErrorBoundary from "./ErrorBoundary";
function setElementClick(parent) {
  sessionStorage.setItem('data-parent', parent)
}
export default function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
        <SideBar />
      </ErrorBoundary>
    </div>
  );
}
