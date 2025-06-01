import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { VerticalMenu } from "../../components/VerticalMenu/VerticalMenu";
import styles from "./MainLayout.module.css";
import { Footer } from "../../components/Footer/Footer";
type MainLayoutProps = {
  pageTitle: string;
  children: React.ReactNode;
};
export function MainLayout({ children, pageTitle }: MainLayoutProps) {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <section className={styles.section}>
      <Header />
      <VerticalMenu
        activeMenu={activeMenu}
        onToggle={() => setActiveMenu(!activeMenu)}
      />
      <main className={`${styles.main} ${activeMenu ? styles.activeMain : ""}`}>
        <h1>{pageTitle}</h1>
        <div className={styles.hero}>{children}</div>
        <div className={styles.footer}>
          <Footer></Footer>
        </div>
      </main>
    </section>
  );
}
