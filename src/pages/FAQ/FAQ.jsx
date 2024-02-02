import React from "react";
import styles from "./FAQ.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ReactComponent as Expand } from "../../assets/Expand.svg";

function FAQ() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2 className={styles.faqTitle}>FAQ</h2>
          <p className={styles.faqLabel}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>
        <div className={styles.right}>
          <p className={styles.rightText}>
            Do I need a personal injury report?
          </p>
          <p className={styles.rightLabel}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </p>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<Expand />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={styles.rightText}
            >
              How much is my case worth?
            </AccordionSummary>
            <AccordionDetails className={styles.accordionDetails}>
              The value of your case depends on various factors, including the
              extent of injuries, medical expenses, lost wages, and other
              damages. It's crucial to consult with our experienced attorneys
              who can assess the details of your case and provide an accurate
              evaluation tailored to your specific situation.
            </AccordionDetails>
          </Accordion>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<Expand />}
              aria-controls="panel2-content"
              id="panel2-header"
              className={styles.rightText}
            >
              What should I do right after car accident?
            </AccordionSummary>
            <AccordionDetails className={styles.accordionDetails}>
              After a car accident, prioritize safety and seek medical attention
              for any injuries. Call the police to report the incident and
              exchange information with the other parties involved. Document the
              scene by taking photos, collecting witness information, and noting
              the conditions. Notify your insurance company promptly. For legal
              guidance on your rights and potential claims, consult with our law
              firm as soon as possible.
            </AccordionDetails>
          </Accordion>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<Expand />}
              aria-controls="panel2-content"
              id="panel2-header"
              className={styles.rightText}
            >
              How much does an initial consultation cost?
            </AccordionSummary>
            <AccordionDetails className={styles.accordionDetails}>
              Our law firm offers a complimentary initial consultation. During
              this meeting, we'll discuss the details of your case, answer any
              questions you may have, and provide an overview of how we can
              assist you. There is no charge for this initial consultation, and
              it's an opportunity for you to gain valuable insights into your
              legal options.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
