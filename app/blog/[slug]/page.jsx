const page = (props) => {
  console.log("props", props);
  return (
    <div className="p-8 bg-gray-200 w-full h-screen flex justify-center items-center">
      {props.params.slug}
    </div>
  );
};

export default page;
