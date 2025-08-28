import { TooltipProvider } from "./components/ui/tooltip"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import FarmerDashboard from "./components/FarmerDashboard"
import LocalBuyersLogistics from "./components/LocalBuyersLogistics"
import Leaderboard from "./components/LeaderBoard"
import Footer from "./components/Footer"

function App() {
  return (
    <TooltipProvider>
      <div className="max-w-[100rem] mx-auto bg-fixed bg-cover bg-center " style={{ backgroundImage: "url('/Rice-Field-2-2048x1365.jpg')"}}>
        <div className="bg-black/30 min-h-screen "
        >
          <Header />
          <main>
            <Hero />
            <Features />
            <FarmerDashboard />
            <Leaderboard />
            <LocalBuyersLogistics />
          </main>
          <Footer />
        </div>
      </div>
    </TooltipProvider>
  )
}

export default App

