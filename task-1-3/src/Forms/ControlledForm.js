import React, { useState, useEffect } from "react";
import "./ControlledForm.css";

export default function ControlledForm() {


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    secQuestion: "",
    secAnswer: "",
    bio: "",
  });

  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    secQuestion: "",
    secAnswer: "",
    bio: "",
  });

  const [buttonActive, setButtonActive] = useState(false);

  useEffect(() => {
    let state = true;
    for (const item in formData){
      if(formData[item]===""){
        state = false;
      }
    }

    // for (const item in formError) {
    //   if(formError[item] !==""){
    //     state = false;
    //   }
    // }
    setButtonActive(state);
    },[formData]);
  

  const handleFirstname = (e) => {
    if (e.target.value === "") {
      setFormError({
        ...formError,
        firstName: "First name should not be empty",
      });
    } else if (!/^[a-zA-Z]+$/.test(e.target.value)) {
      setFormError({
        ...formError,
        firstName: "Should only contain letters",
      });
    } else if (e.target.value.length < 3 || e.target.value.length > 15) {
      setFormError({
        ...formError,
        firstName: "Letter count should be between 3 and 15",
      });
    } else {
      setFormError({ ...formError, firstName: "" });

      setFormData({ ...formData, firstName: e.target.value });
    }


  };

  const handleLastname = (e) => {
    if (e.target.value === "") {
      setFormError({
        ...formError,
        lastName: "Last name should not be empty",
      });
    } else if (!/^[a-zA-Z]+$/.test(e.target.value)) {
      setFormError({ ...formError, lastName: "Should only contain letters" });
    } else if (e.target.value.length < 3 || e.target.value.length > 15) {
      setFormError({
        ...formError,
        lastName: "Letter count should be between 3 and 15",
      });
    } else {
      setFormError({ ...formError, lastName: "" });
      setFormData({ ...formData, lastName: e.target.value });
    }

    // setFormData({ ...formData, lastName: e.target.value });
  };

  const handleEmailchange = (e) => {
    if (e.target.value === "") {
      setFormError({
        ...formError,
        email: "Email should not be empty",
      });
    } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.target.value)) {
      setFormError({ ...formError, email: "Email not in correct format" });
    } else {
      setFormError({ ...formError, email: "" });
      setFormData({ ...formData, email: e.target.value });
    }

    
  };

  const handleSecQuestion = (e) => {
    if (e.target.value === "none") {
      setFormError({
        ...formError,
        secQuestion: "Select a question",
      });
    }else {
        setFormError({ ...formError, secQuestion: "" });
        setFormData({ ...formData, secQuestion: e.target.value });
      }
      
  };

  const handleSecAnswer = (e) => {
    if (e.target.value === "") {
      setFormError({
        ...formError,
        secAnswer: "Provide the answer to security question",
      });
    }else {
      setFormError({ ...formError, secAnswer: "" });
      setFormData({ ...formData, secAnswer: e.target.value });
    }
    
  };

  const handleBiochange = (e) => {
    if (e.target.value === "") {
      setFormError({
        ...formError,
        bio: "Enter some details",
      });
    }else if(e.target.value.length < 15){
      setFormError({
        ...formError,
        bio: "characters length not sufficient",
      });
    }else{
      setFormError({...formError, bio: "" });
      setFormData({ ...formData, bio: e.target.value });
    }
    
  };



  const handlesubmit = (e)=>{
    console.log(formData);
    e.preventDefault();
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      secQuestion: "",
      secAnswer: "",
      bio: "",
    }) 
  }



  const clearForm = ()=>{
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      secQuestion: "",
      secAnswer: "",
      bio: "",
    })

    setFormError({
      firstName: "",
      lastName: "",
      email: "",
      secQuestion: "",
      secAnswer: "",
      bio: "",
    })
  }
  


  // console.log(formData, formError);

  return (
    <div className="controlledFormcontainer">
      <form onSubmit={handlesubmit}>
        <div>
          <input
            type="text"
            placeholder="First name"
            onChange={handleFirstname}
          />
          {formError.firstName.length > 0 && (
            <span className="error">{formError.firstName}</span>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Last name"
            onChange={handleLastname}
          />
          {formError.lastName.length > 0 && (
            <span className="error">{formError.lastName}</span>
          )}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            onChange={handleEmailchange}
          />
          {formError.email.length > 0 && (
            <span className="error">{formError.email}</span>
          )}
        </div>
        <div>
          <select onChange={handleSecQuestion}>
            <option value="none">Select a question</option>
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
          {formError.secQuestion.length > 0 && (
            <span className="error">{formError.secQuestion}</span>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Security answer"
            onChange={handleSecAnswer}
          />
          {formError.secAnswer.length > 0 && (
            <span className="error">{formError.secAnswer}</span>
          )}
        </div>

        <div>
          <textarea
            type="text"
            placeholder="Bio..."
            onChange={handleBiochange}
          ></textarea>
          {formError.bio.length > 15 && (
            <span className="error">{formError.bio}</span>
          )}
        </div>

        <div>
          <button type="submit" disabled={!buttonActive}>Submit</button>
          <button onClick={clearForm}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
