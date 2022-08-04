import React, { useRef, useState } from "react";

export default function UncontrolledForm() {

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const secQuestion = useRef();
  const secAnswer = useRef();
  const bio = useRef();

  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   secQuestion: "",
  //   secAnswer: "",
  //   bio: "",
  // });



  const [formError, setFormError] = useState({
    firstNameErr: "",
    lastNameErr: "",
    emailErr: "",
    secQuestionErr: "",
    secAnswerErr: "",
    bioErr: "",
  });

  const handlesubmit = (e) => {
    e.preventDefault();

    let error = {...formError};
    let state = true;

    if (firstName.current.value === "") {
      error["firstNameErr"] = "First name should not be empty";
      state = false;
    } else if (!/^[a-zA-Z]+$/.test(firstName.current.value)) {
      error["firstNameErr"] = "Should only contain letters";
      state = false;
    } else if (
      firstName.current.value.length < 3 ||
      firstName.current.value > 15
    ) {
      error["firstNameErr"] = "Letter count should be between 3 and 15";
      state = false;
    } else {
      error["firstNameErr"] = "";
      state = true;
    }

    if (lastName.current.value === "") {
      error["lastNameErr"] = "Last name should not be empty";
      state = false;
    } else if (!/^[a-zA-Z]+$/.test(lastName.current.value)) {
      error["lastNameErr"] = "Should only contain letters";
      state = false;
    } else if (
      lastName.current.value.length < 3 ||
      lastName.current.value > 15
    ) {
      error["lastNameErr"] = "Letter count should be between 3 and 15";
      state = false;
    } else {
      error["lastNameErr"] = "";
      state=true;
    }

    if (email.current.value === "") {
      error["emailErr"] = "Email should not be empty";
      state = false;
    } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email.current.value)) {
      state = false;
      error["emailErr"] = "Email not in correct format";
    } else {
      error["emailErr"] = "";
      state=true;
    }

    if (secQuestion.current.value === "none") {
      error["secQuestionErr"] = "Select a question";
      state = false;
    } else {
      error["secQuestionErr"] = "";
      state=true;
    }

    if (secAnswer.current.value === "") {
      error["secAnswerErr"] = "Provide the answer to security question";
      state = false;
    } else {
      error["secAnswerErr"] = "";
      state=true;
    }

    if (bio.current.value === "") {
      error["bioErr"] = "Enter some details";
      state = false;
    } else if (bio.current.value.length < 15) {
      error["bioErr"] = "characters length not sufficient";
      state = false;
    } else {
      error["bioErr"] = "";
      state=true;
    }

    setFormError(error);

    if (state) {
      console.log({
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        email: email.current.value,
        secQuestion: secQuestion.current.value,
        secAnswer: secAnswer.current.value,
        bio: bio.current.value,
      });
    } else {
      console.log(error);
      setFormError(error);
    }
    
  };

  const clearForm = (e) => {
    firstName.current.value = "";
    lastName.current.value = "";
    email.current.value = "";
    secQuestion.current.value = "";
    secAnswer.current.value = "";
    bio.current.value = "";

    setFormError({
      firstNameErr: "",
      lastNameErr: "",
      emailErr: "",
      secQuestionErr: "",
      secAnswerErr: "",
      bioErr: "",
    });
  };
    console.log(formError);

  return (
    <div>
      <div className="controlledFormcontainer">
        <form onSubmit={handlesubmit}>
          <div>
            <input type="text" placeholder="First name" ref={firstName} />
            {formError.firstNameErr.length !== "" && (
              <span className="error">{formError.firstNameErr}</span>
            )}
          </div>
          <div>
            <input type="text" placeholder="Last name" ref={lastName} />
            {formError.lastNameErr !== "" && (
              <span className="error">{formError.lastNameErr}</span>
            )}
          </div>
          <div>
            <input type="text" placeholder="Email" ref={email} />
            {formError.emailErr !== "" && (
              <span className="error">{formError.emailErr}</span>
            )}
          </div>
          <div>
            <select ref={secQuestion}>
              <option value="none">
                Select a question
              </option>
              <option value="What is your mother's maiden name?">
                What is your mother's maiden name?
              </option>
              <option value="What was the name of your first pet?">
                What was the name of your first pet?
              </option>
              <option value="What was the name of your first school?">
                What was the name of your first school?
              </option>
            </select>
            {formError.secQuestionErr !== "" && (
              <span className="error">{formError.secQuestionErr}</span>
            )}
          </div>

          <div>
            <input type="text" placeholder="Security answer" ref={secAnswer} />
            {formError.secAnswerErr !== "" && (
              <span className="error">{formError.secAnswerErr}</span>
            )}
          </div>

          <div>
            <textarea type="text" placeholder="Bio..." ref={bio}></textarea>
            {formError.bioErr !== "" && (
              <span className="error">{formError.bioErr}</span>
            )}
          </div>

          <div>
            <button type="submit">Submit</button>
            <button type="button" onClick={clearForm}>Cancel</button>
          </div>
        </form>
        
      </div>
    </div>
  );
}
