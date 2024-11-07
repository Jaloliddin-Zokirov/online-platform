import React, { useState } from "react";
import styles from "./Lesson.module.scss";
import Video from "../Video/Video";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Lesson = () => {
  const [expanded, setExpanded] = useState("panel1");
  const [expandedVideo, setExpandedVideo] = useState("Lesson 1");

  const handleChange = (panel) => (evt, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={styles.lesson}>
      <div className={styles.menu}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Lesson 1
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={styles.content} onClick={() => setExpandedVideo("Lesson 1")}>
              <img
                src="https://picsum.photos/100/70"
                width={100}
                height={70}
                alt=""
              />
              <div className={styles.textContent}>
                <h4>Title</h4>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Lesson 2
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={styles.content} onClick={() => setExpandedVideo("Lesson 2")}>
              <img
                src="https://picsum.photos/100/70"
                width={100}
                height={70}
                alt=""
              />
              <div className={styles.textContent}>
                <h4>Title</h4>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Lesson 3
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={styles.content} onClick={() => setExpandedVideo("Lesson 3")}>
              <img
                src="https://picsum.photos/100/70"
                width={100}
                height={70}
                alt=""
              />
              <div className={styles.textContent}>
                <h4>Title</h4>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Lesson 4
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={styles.content} onClick={() => setExpandedVideo("Lesson 4")}>
              <img
                src="https://picsum.photos/100/70"
                width={100}
                height={70}
                alt=""
              />
              <div className={styles.textContent}>
                <h4>Title</h4>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.videos}>
        <Video content={expandedVideo} />
      </div>
    </div>
  );
};

export default Lesson;
