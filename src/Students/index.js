import React, { useCallback, useState } from "react";
import data from "../data/student_data.json";
import Table from "./Table";
import Header from "./Header";
import Footer from "./Footer";
function Index() {
  const [listData, setListData] = useState(data);
  const memoizedDelete = useCallback((i) => {
    deleteRecord(i);
  }, []);
  const memoizedReadRecord = useCallback((i) => {
    readRecord(i);
  }, []);

  const deleteRecord = (i) => {
    setListData((prev) => prev.filter((val, index) => index !== i));
  };
  const readRecord = (i) => {
    setListData((prev) =>
      prev.map((val, index) => {
        if (index === i) {
          return { ...val, isRead: true };
        } else {
          return val;
        }
      })
    );
  };
  return (
    <div style={{maxWidth:'100%', overflowX:'auto'}}>
      <Header allNamesCount={"10"} />
      <Table
        data={listData}
        deleteRecord={memoizedDelete}
        readRecord={memoizedReadRecord}
      />
      <Footer />
    </div>
  );
}

export default Index;
