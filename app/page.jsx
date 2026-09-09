import { Suspense } from "react";
import UserContent from "../components/userContent";
const HomePage = async () => {
  return (
    <div className="p-10 flex flex-1 items-center justify-center">
      <Suspense fallback={<p>Loading...</p>}>
        <UserContent />
      </Suspense>
    </div>
  );
};

export default HomePage;
