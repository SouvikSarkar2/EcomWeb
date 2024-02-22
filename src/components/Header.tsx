import Image from "next/image";

function Header() {
  return (
    <>
      <section className=" h-[80vh] max-w-[1920px] overflow-hidden flex justify-center items-center relative bg-[#F8F1DD]">
        <div className="sm:min-w-[1920px] h-[80vh] top-0 sm:absolute">
          <div>
            <Image className=" brightness-75" src={"/home1.jpg"} fill alt="" />
          </div>
        </div>
        <div className="w-auto absolute top-0 flex justify-between sm:min-w-[1366px] sm:max-w-[1920px]   min-h-[100px] items-center text-text font-bold p-6">
          <div>Logo</div>
          <div className="flex gap-6">
            <div>Groceries </div>
            <div>Home</div>
            <div>Fashion</div>
            <div>Electronics</div>
          </div>
          <div>Cart</div>
        </div>
      </section>
    </>
  );
}

export default Header;
