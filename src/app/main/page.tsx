import CartProvider from "@/Context/CartContext";
import Header from "@/components/Header";
import Main from "@/components/Main";

interface SearchParams {
  q: string;
}

const page: React.FC<{ searchParams: SearchParams }> = ({ searchParams }) => {
  // console.log("searchParams : ", searchParams);
  return (
    <div className="">
      <CartProvider>
        <Header />
        <Main searchParams={searchParams} />
      </CartProvider>
    </div>
  );
};

export default page;
