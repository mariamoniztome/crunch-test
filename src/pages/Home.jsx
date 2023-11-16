/**
 * The Home component renders the main content of the home page.
 * It includes the HeroSection, Grid, and HeadsUpNotification components.
 * @returns The rendered Home component.
 */
import HeroSection from "../components/herosection/HeroSection";
import Grid from "../components/grid/Grid";
import HeadsUpNotification from "../components/headsupnotification/HeadsUpNotification.";

const Home = () => {
  return (
    <main>
        <HeroSection />
        <Grid />
        <HeadsUpNotification />
    </main>
      

  );
};

export default Home;
