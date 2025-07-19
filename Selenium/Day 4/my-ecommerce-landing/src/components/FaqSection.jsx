import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FaqSection() {
  return (
    <div style={{ margin: "2rem 0" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What is your return policy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can return most items within 30 days. However, due to an intentional bug, this
            might sometimes show the wrong info or fail to process your request.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Do you offer international shipping?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we ship worldwide. Some students might test pop-ups or redirects here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Can I change or cancel my order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can, if your order hasn’t shipped yet. This is a perfect place to test accordions
            in Selenium.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
