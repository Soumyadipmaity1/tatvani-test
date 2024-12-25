import AboutSection from "@/components/HomePage/AboutSection";
import AdvertisementSection from "@/components/HomePage/AdvertisementSection";
import FeaturesSection from "@/components/HomePage/Feature";
import HomeSlider from "@/components/HomePage/HomeSlider";
import LatestNews from "@/components/HomePage/LatestNews";
import FeaturedPoem from "@/components/HomePage/LatestPoem";
import FeaturedStories from "@/components/HomePage/LatestStories";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <FeaturesSection />
      <AboutSection />
      <LatestNews />

      <FeaturedPoem />
      <FeaturedStories />
      <AdvertisementSection />

      {/* <TestimonialSection /> */}

    </>
  )
}
