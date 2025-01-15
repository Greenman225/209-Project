import { Footer } from "flowbite-react";
import {
  BsGithub,
  BsWhatsapp,
  BsTelegram,
} from "react-icons/bs";

import styles from "./Footer.module.css"; // Import CSS module

function FooterComponent() {
  return (
    <Footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.icons}>
          <Footer.Icon href="https://github.com/Greenman225" icon={BsGithub} />
          <Footer.Icon href="https://t.me/Greenman225" icon={BsTelegram} />
          <Footer.Icon
            href="https://wa.me/message/UKOKGHNGLYZTP1"
            icon={BsWhatsapp}
          />
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;

/* Footer.module.css */