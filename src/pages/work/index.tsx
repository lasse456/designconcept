import Layout from "@/components/Layout";
import DefaultHero from "@/components/Layout/DefaultHero";
import Services from "@/components/services";


export default function Home() {
  return (
    <Layout>
      <DefaultHero section="work" heading="Cases we're proud of" />
      <Services />
    </Layout>
  );
}
