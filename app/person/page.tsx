import StoreProvider from "../../components/StoreProvider";
import PersonPage from "./PersonPage";

export const metadata = {
  title: "GITHUB PROFILE FINDER | Person",
  description: "Github Profile Finder with Next.js",
};

const page = () => {
  return (
    <StoreProvider>
      <PersonPage />
    </StoreProvider>
  );
};

export default page;
