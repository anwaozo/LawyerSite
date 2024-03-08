import React from "react";
import { evaluationSection } from "../../../service-cms/applicationFragments";

export default function EvaluationFormComponent() {
  const { title, evaluationForm } = evaluationSection;
  return (
    <section className="eveluation-form-area">
      <div className="page-container">
        <div className="row">
          <div className="col-6">
            <div
              className="evaluation-form-box"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <h3>{evaluationForm.title}</h3>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="inputs"
                    placeholder={evaluationForm.fullName.placeholderText}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="inputs"
                    placeholder={evaluationForm.phone.placeholderText}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="inputs"
                    placeholder={evaluationForm.email.placeholderText}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="inputs"
                    placeholder={evaluationForm.description.placeholderText}
                  ></textarea>
                </div>
                <button type="submit" className="btn-submit">
                  {evaluationForm.buttonText}
                </button>
              </form>
            </div>
          </div>
          <div className="col-6">
            <h4
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              {title}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
