import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechnologiesSection from "./components/TechnologiesSection";

function App() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <TechnologiesSection />
            </main>

            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}

export default App;
