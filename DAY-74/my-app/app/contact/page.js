import React from "react";
import Script from "next/script";
const contact = () => {
  return (
      <div>
      <Script>
        {`alert("This is Contact Page")`}
      </Script>
          contact
      </div>
  );
};

export default contact;
export const metadata = {
    title: "Next App Contact Page",
    description: "Generated by create next app",
};