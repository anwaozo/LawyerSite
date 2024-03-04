"use client";
import Image from "next/image";
import React,{useState} from "react";


export default function Homeverticalcomponent() {
  const [section, setSection] = useState("Discovery call");
  return (
    <section className="verticle-tab-area">
        <div className="page-container">
          <div className="tab-block">
            <div
              className="verticle-tab"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <button
                className={`tablinks ${section==="Discovery call" ? "active" : ""}`}
                onClick={() => setSection("Discovery call")}
                id="defaultOpen"
              >
                Discovery call
              </button>
              <button
                className={`tablinks ${section==="Case analysis" ? "active" : ""}`}
                onClick={() => setSection("Case analysis")}
              >
                Case analysis
              </button>
              <button
                className={`tablinks ${section==="Budgeting" ? "active" : ""}`}
                onClick={() => setSection("Budgeting")}
              >
                Budgeting
              </button>
              <button
               className={`tablinks ${section==="Execution" ? "active" : ""}`}
               onClick={() => setSection("Execution")}
              >
                Execution
              </button>
            </div>
            <div
              className="tabcontent-inner"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1500"
            >
              {section==="Discovery call" && <div id="discovery-call" className="tabcontent">
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quSed ut perspiciatis
                  unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, toNemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur ma Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo con Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id es
                </p>
              </div>}
              {section==="Case analysis" && <div id="case-analysis" className="tabcontent">
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quSed ut perspiciatis
                  unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, toNemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur ma Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo con Excepteur sint
                  occaecat cupidatat non proident
                </p>
              </div>}
              {section==="Budgeting" && <div id="budgeting" className="tabcontent">
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quSed ut perspiciatis
                  unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, toNemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur ma Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo con
                </p>
              </div>}
              {section==="Execution" &&<div id="execution" className="tabcontent">
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quSed ut perspiciatis
                  unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, toNemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur ma Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>}
            </div>
          </div>
        </div>
      </section>
  );
}
