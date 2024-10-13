import React from "react";

import styles from "./../styles/DefaultLayout.module.scss";
import InterFont from "../font/InterFont";

interface DefaultLayoutProps {
  children: any;
  className?: string;
}

const DefaultLayout: React.FunctionComponent<DefaultLayoutProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`${styles.defaultLayout}`}>
      <InterFont />
      {children}
    </div>
  );
};

export default DefaultLayout;
