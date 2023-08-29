import StoreProvider from "../../components/StoreProvider";
import SearchPage from "./SearchPage";

export const metadata = {
  title: "GITHUB PROFILE FINDER | Search",
  description: "Github Profile Finder with Next.js",
};

const page = () => {
  return (
    <StoreProvider>
      <SearchPage />
    </StoreProvider>
  );
};
export default page;
