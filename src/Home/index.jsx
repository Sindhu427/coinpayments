import HeroSection from "../Home/herosection";
import CardSection from "./cardsection";
import KeyBenefits from "./keybenefits";
import KeyFeatures from "./keyfeatures";
import MetricsSection from "./metricssection";
import SolutionsSection from "./solutionsection";

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <HeroSection />
      <MetricsSection />
      <KeyFeatures />
      <KeyBenefits />
      <CardSection />
      <SolutionsSection />
    </div>
  );
}
export default Home;
