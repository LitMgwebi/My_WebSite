import { Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import  ExpandMoreIcon  from "@material-ui/icons/ExpandMore"
import { useState } from "react";

function Education() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (e, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }
    return (
        <div id="ContentContainer">
            <div id="Accordion">
                <Accordion className="accordion" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        classes={{
                            root: 'accordionSummary'
                        }}
                        className="accordionSummary"
                    >
                        <h2>AS Level Certificate</h2>
                    </AccordionSummary>
                    <AccordionDetails className="accordionDetails">

                        <h3>Bellafides Private School</h3>
                        <h3>Matric Level</h3>

                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        className="accordionSummary"
                    >
                        <h2>NDip Information Technology(Software Development)</h2>
                    </AccordionSummary>
                    <AccordionDetails className="accordionDetails">

                        <h3>Nelson Mandela University</h3>
                        <h3>Undergradute level</h3>

                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}

export default Education;