import CartProvider from "@/Context/CartContext";
import Header from "@/components/Header";
import Main from "@/components/Main";

const page = ({ searchParams }) => {
  /*  console.log(searchParams); */
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
