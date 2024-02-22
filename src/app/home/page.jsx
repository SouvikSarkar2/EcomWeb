import Image from "next/image";

const page = () => {
  return (
    <>
      <section className=" h-[80vh] max-w-[1920px] overflow-hidden flex justify-center items-center relative">
        <div className="sm:min-w-[1366px] sm:max-w-[1920px] h-[80vh] top-0 sm:absolute">
          <div>
            <Image
              className=" brightness-75"
              src={
                "https://images.unsplash.com/photo-1519554318711-aaf73ece6ff9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJlc3MlMjBsbmFkc2NhcGV8ZW58MHx8MHx8fDA%3D"
              }
              fill
              objectFit="cover"
              alt=""
            />
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
      ;
    </>
  );
};

export default page;
