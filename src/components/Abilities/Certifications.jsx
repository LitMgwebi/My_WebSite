import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import sqlCertificate from "../../media/Certificates/SQL_Certificate.pdf";
import googleAdsCertificate from "../../media/Certificates/Google_Ads_Certification.pdf";

function Certifications() {
  const height = 350;
  return (
    <div id="ContentContainer">
      <div className="Certificate">
        <h4>SQL Certificate</h4>
        <a href="https://www.sololearn.com/certificates/CT-UJ828G0U" target="_blank" rel="noopener noreferrer">
          <Document classname="doc" file={sqlCertificate}>
              <Page height={height} pageNumber={1} />
          </Document>
        </a>
      </div>
      
      <div className="Certificate">
        <h4>Google Ads Display Certificate</h4>
        <Document classname="doc" file={googleAdsCertificate}>
            <Page height={height} pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}

export default Certifications;