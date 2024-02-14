import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-secondary text-text flex justify-center items-center h-full flex-col gap-4">
      <Navbar />
      <div className="text-5xl sm:text-7xl font-bold text-center">
        <div>Welcome To EcomWeb</div>
      </div>
      <div className="p-7">
        &quot;Discover endless possibilities at your premier online shopping
        destination.&quot;
      </div>
    </div>
  );
}
