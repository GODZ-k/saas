import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import "./Accordian.css";

function AccordionExpandDefault() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <section class="section-white no-padding">
        <div class="container-fluid px-0">
          <div class="row no-gutters mr-0 ml-0">
            <div className=" pl-0 pr-0 col-md-6">
              <img
                src="qquestion-img.jpeg"
                class="width-100"
                alt="Happy Woman"
              />
            </div>
            <div className="col-md-6 pl-0 pr-0 mt-10 mb-6 md:mb-4 md:mt-4 lg:mt-16">
              <div class="small-col-inside">
                <h3 className=" text-4xl font-bold text-[#071e55] mb-3">
                  Frequently Asked Questions
                </h3>
                <div class="accordion" id="accordionFAQ">
                <Accordion
                
                    defaultExpanded
                    style={{margin:"0px"}}
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                    TransitionProps={{timeout:500}}
                    className="main-accordian"
                  >
                    <AccordionSummary
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        sx={{
                          width: "100%",
                          color:"#071e55",
                          fontSize: "19px",
                          fontWeight: "bold",
                          fontFamily: "'Dosis', sans-serif",
                          flexShrink: 0,
                        }}
                      >
                        Email and user settings
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography style={{color:"#7c8595", marginBottom:"10px", fontFamily:"'Open Sans', sans-serif", fontSize:"17px"}}>
                        <div className="bg-blue-500  mt-4 h-[2px]"></div>
                       <div className="pt-2">
                       Nemo enim ipsam voluptatem quia voluptas situm ets
                        aspernatis netsum loris fugit, sed quia magni dolores
                        eos quis ratione sequi et vesciunt, neque et quis autem
                        velis reprehenderit etsim quis velit netsum valoriset.
                       </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    style={{marginTop:"0px"}}
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                    TransitionProps={{timeout:500}}
                    className="main-accordian"
                  >
                    <AccordionSummary
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography sx={{  width: "100%",
                          color:"#071e55",
                          fontSize: "19px",
                          fontWeight: "bold",
                          fontFamily: "'Dosis', sans-serif",
                          flexShrink: 0,}}>
                        Import new billing system data
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography style={{color:"#7c8595", fontFamily:"'Open Sans', sans-serif", fontSize:"17px"}}>
                        <div className="bg-blue-500 h-0.5 mb-2 -mt-4"></div>
                        <div className="pt-2">
                       Nemo enim ipsam voluptatem quia voluptas situm ets
                        aspernatis netsum loris fugit, sed quia magni dolores
                        eos quis ratione sequi et vesciunt, neque et quis autem
                        velis reprehenderit etsim quis velit netsum valoriset.
                       </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    style={{marginTop:"0px"}}
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                    TransitionProps={{timeout:500}}
                    className="main-accordian"
                  >
                    <AccordionSummary
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <Typography
                        sx={{
                            width: "100%",
                            color:"#071e55",
                            fontSize: "19px",
                            fontWeight: "bold",
                            fontFamily: "'Dosis', sans-serif",
                            flexShrink: 0,
                        }}
                      >
                        Working with integrated apps
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography style={{color:"#7c8595", fontFamily:"'Open Sans', sans-serif", fontSize:"17px"}}>
                        <div className="bg-blue-500 h-0.5 mb-1 -mt-4"></div>
                        <div className="pt-2">
                       Nemo enim ipsam voluptatem quia voluptas situm ets
                        aspernatis netsum loris fugit, sed quia magni dolores
                        eos quis ratione sequi et vesciunt, neque et quis autem
                        velis reprehenderit etsim quis velit netsum valoriset.
                       </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                   style={{marginTop:"0px"}}
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                    TransitionProps={{timeout:500}}
                    className="main-accordian"
                  >
                    <AccordionSummary
                      aria-controls="panel4bh-content"
                      id="panel4bh-header"
                    >
                      <Typography sx={{  width: "100%",
                          color:"#071e55",
                          fontSize: "19px",
                          fontWeight: "bold",
                          fontFamily: "'Dosis', sans-serif",
                          flexShrink: 0, }}>
                        Two-factor authentication
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography style={{color:"#7c8595", fontFamily:"'Open Sans', sans-serif", fontSize:"17px"}}>
                        <div className="bg-blue-500 h-0.5 mb-2 -mt-3"></div>
                        <div className="pt-2">
                       Nemo enim ipsam voluptatem quia voluptas situm ets
                        aspernatis netsum loris fugit, sed quia magni dolores
                        eos quis ratione sequi et vesciunt, neque et quis autem
                        velis reprehenderit etsim quis velit netsum valoriset.
                       </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AccordionExpandDefault;
