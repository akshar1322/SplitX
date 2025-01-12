/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect } from "react";
import EclipseBackground from "../components/ui/Share/EclipseBackground";
import useDisableRightClick from "../hooks/useDisableRightClick";
import useDisableInspect from "../hooks/disableInspect";
import DeviceCheck from "../components/DeviceCheck";

const Page = () => {
  // Disable right-click and inspect functionality using custom hooks
  useDisableRightClick();
  useDisableInspect();

  useEffect(() => {
    document.title = "Just Fun | SPLIX"; // Update the document title
  }, []);

  return (
    <DeviceCheck>
      <div>
        <EclipseBackground sizePercentage={100} rows={18} columns={50} />
      </div>
    </DeviceCheck>
  );
};

export default Page;
