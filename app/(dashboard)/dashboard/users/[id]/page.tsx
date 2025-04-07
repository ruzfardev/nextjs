import React from "react";

interface Props {
  id: string;
}

const Page = ({ params }: { params: Props }) => {
  return <div>User Details Page {params.id}</div>;
};

export default Page;
