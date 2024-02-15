import Image from "next/image";

const page = () => {
  return (
    <>
      <section className=" h-[75vh] max-w-[1920px] overflow-hidden flex justify-center items-center relative">
        <div className="min-w-[1366px] max-w-[1920px] border-2 border-red-400 h-[75vh]  top-0 absolute">
          <div>
            <Image
              src={
                "https://images.unsplash.com/photo-1519554318711-aaf73ece6ff9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJlc3MlMjBsbmFkc2NhcGV8ZW58MHx8MHx8fDA%3D"
              }
              fill
              alt=""
            />
          </div>
        </div>
        <div className="absolute top-0 flex justify-between w-auto min-w-[1366px] min-h-[100px] items-center">
          <div>Logo</div>
          <div>Groceries Home Fashion Electronics</div>
          <div>Cart</div>
        </div>
      </section>
      ;
    </>
  );
};

export default page;
