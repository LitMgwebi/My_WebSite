import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import sqlCertificate from "../../media/Certificates/SQL_Certificate.pdf";
import googleAdsCertificate from "../../media/Certificates/Google_Ads_Certification.pdf";

function Certifications() {
  return (
    <div className="certifications">
      <section>
        <h4>SQL Certificate</h4>
        <a href="https://www.sololearn.com/certificates/CT-UJ828G0U" target="_blank" rel="noopener noreferrer">
          <Document classname="doc" file={sqlCertificate}>
              <Page pageNumber={1} />
          </Document>
        </a>
      </section>
      
      <section>
        <h4>Google Ads Display Certificate</h4>
        <Document classname="doc" file={googleAdsCertificate}>
            <Page pageNumber={1} />
        </Document>
      </section>
    </div>
  );
}

export default Certifications;