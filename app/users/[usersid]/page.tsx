import React from "react";

interface pageProps {
  userid: string;
}

const Users = async (props: pageProps) => {
    console.log(props.userid);
  return <div>{}</div>;
};

export default Users;
