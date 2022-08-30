import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import {useState} from "react";

function Certifications() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({numPages}){
      setNumPages(numPages);
      setPageNumber(1);
    }
  
    function changePage(offSet){
      setPageNumber(prevPageNumber => prevPageNumber + offSet);
    }
  
    function changePageBack(){
      changePage(-1)
    }
  
    function changePageNext(){
      changePage(+1)
    }

    return (
       <div id="myDocs">
            <Document classname="doc" file="/media/master.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page height="450" pageNumber={pageNumber} />
            </Document>
            {/* <p> Page {pageNumber} of {numPages}</p> */}
            <div className="button-group">
                <p> Page {pageNumber} of {numPages}</p>

                { pageNumber > 1 && 
                    <button onClick={changePageBack}>Back</button>
                }
                {
                pageNumber < numPages &&
                    <button onClick={changePageNext}>Next</button>
                }
            </div>
       </div>
    );
}

export default Certifications;