import { PageBanner } from "./PageBanner";
import { PageNavigation } from "./PageNavigation";
import "./PageHeader.css";

const PageHeader = () => {
  return (
    <header className="page_header">
      <PageBanner />
      <PageNavigation />
    </header>
  );
};

export { PageHeader };
