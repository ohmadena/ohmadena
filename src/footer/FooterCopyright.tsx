import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="footer-copyright">
    © Copyright {new Date().getFullYear()} {AppConfig.site_name}.
    {/* Powered with{' '} */}
    {/* <span role="img" aria-label="ass">
      🍑
    </span> */}
  </div>
);

export { FooterCopyright };
