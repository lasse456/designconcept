import Layout from "@/components/Layout";
import DefaultHero from "@/components/Layout/DefaultHero";
import WorkComponent from "@/components/work";



export default function Work() {
  return (
    <Layout>
      <DefaultHero section="work" heading="Partnerships we're proud of" />
      <WorkComponent />
    </Layout>
  );
}
