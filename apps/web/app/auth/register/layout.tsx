import React, { PropsWithChildren } from "react";

const RegisterLayout = ({children} : PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 dark:bg-gray-300 dark:bg-gray-900">
      {children}
    </div>
  );
};

export default RegisterLayout;
