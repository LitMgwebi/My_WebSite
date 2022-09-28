import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import sqlCertificate from "../../media/SQL_Certificate.pdf";
import googleAdsCertificate from "../../media/Google_Ads_Certification.pdf";

function Certifications() {
    return (
      <div id="ContentContainer">
        <div className="Certificate">
          <h4>SQL Certificate</h4>
          <a href="https://www.sololearn.com/certificates/CT-UJ828G0U" target="_blank" rel="noopener noreferrer">
            <Document classname="doc" file={sqlCertificate}>
                <Page height={370} pageNumber={1} />
            </Document>
          </a>
        </div>
        
        <div className="Certificate">
          <h4>Google Ads Display Certificate</h4>
          <Document classname="doc" file={googleAdsCertificate}>
              <Page height={370} pageNumber={1} />
          </Document>
        </div>
      </div>
    );
}

export default Certifications;