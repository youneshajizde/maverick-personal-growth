import React from "react";
import Listing from "../_components/Listing";
import { getList } from "../fetchers";

const Advance = async () => {
  const { data: list } = await getList();
  console.log(list?.meta?.pagination);
  return (
    <div>
      <Listing />
    </div>
  );
};

export default Advance;
