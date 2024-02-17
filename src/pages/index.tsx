import Layout from "@/components/Layout";
import Hero from "@/components/hero";
import Services from "@/components/services";
import ImageSection from "@/components/imagesection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
    </Layout>
  );
}
