import Breadcrumb from "@/components/Breadcrumb";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900">
      <Breadcrumb />
      <Content/>
      <Footer/>
    </div>
  );
}
