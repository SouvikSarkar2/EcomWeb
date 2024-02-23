import Header from "@/components/Header";
import Main from "@/components/Main";

const page = ({ searchParams }) => {
  /*  console.log(searchParams); */
  return (
    <div className="">
      <Header />
      <Main searchParams={searchParams} />
    </div>
  );
};

export default page;
