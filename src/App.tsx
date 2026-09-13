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
        </>
    );
}

export default App;
