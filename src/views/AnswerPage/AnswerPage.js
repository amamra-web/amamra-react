import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import ProductSection from "../LandingPage/Sections/ProductSection";
import TeamSection from "../LandingPage/Sections/TeamSection";
import WorkSection from "../LandingPage/Sections/WorkSection";
import SectionBasics from "../Components/Sections/SectionBasics";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/core/SvgIcon/SvgIcon";
import {db} from 'config.js'

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function AnswerPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);

  React.useEffect(() => {
    console.log("useEffect");
    loadQuiz2();
}, []);

const loadQuiz2 = async () => {
    var quizName = 'quiz2';
    const itemsRef = db.ref(`quizzes/${quizName}`);
    itemsRef.on('value', (callback) => {
        let items = callback.val();
        for(let question in items) {
            let questionObject = items[question];
            console.log(questionObject.questionText)
            let choices = questionObject.choices;
            for(let choice in choices) {
                console.log(choices[choice]);
            }
            console.log("ANSWER IS: " + questionObject.answer);
        }
    })
}

  return (
    <div>
      <Header
        color="white"
        routes={dashboardRoutes}
        brand="Assignment Page"
        rightLinks={<HeaderLinks />}
        fixed
        {...rest}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className={classes.title}>
            <br />
            <br />
            <h1>Questions and Answering Examples</h1>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                id="regular"
                inputProps={{
                  placeholder: "Type Answer..."
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <br />
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Success input"
                id="success"
                success
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <br />
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Error input"
                id="error"
                error
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <div className={classes.title}>
              <h5>
                The packet of information at the application layer is called
              </h5>
            </div>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                id="regular"
                inputProps={{
                  placeholder: "Type Answer..."
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <div className={classes.title}>
                <h3>Radio Buttons</h3>
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === "a"}
                      onChange={() => setSelectedEnabled("a")}
                      value="a"
                      name="radio button enabled"
                      aria-label="A"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        root: classes.radioRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot
                  }}
                  label="First Radio"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === "b"}
                      onChange={() => setSelectedEnabled("b")}
                      value="b"
                      name="radio button enabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        root: classes.radioRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot
                  }}
                  label="Second Radio"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  disabled
                  control={
                    <Radio
                      checked={false}
                      value="a"
                      name="radio button disabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        disabled: classes.disabledCheckboxAndRadio,
                        root: classes.radioRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot
                  }}
                  label="Disabled Unchecked Radio"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  disabled
                  control={
                    <Radio
                      checked={true}
                      value="b"
                      name="radio button disabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        disabled: classes.disabledCheckboxAndRadio,
                        root: classes.radioRoot
                      }}
                    />
                  }
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label="Disabled Checked Radio"
                />
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <div className={classes.title}>
                <h3>What is the header size of a UDP packet?</h3>
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === "a"}
                      onChange={() => setSelectedEnabled("a")}
                      value="a"
                      name="radio button enabled"
                      aria-label="A"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        root: classes.radioRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot
                  }}
                  label="8 bits"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === "b"}
                      onChange={() => setSelectedEnabled("b")}
                      value="b"
                      name="radio button enabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        root: classes.radioRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot
                  }}
                  label="8 bytes"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  disabled
                  control={
                    <Radio
                      checked={false}
                      value="a"
                      name="radio button disabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        disabled: classes.disabledCheckboxAndRadio,
                        root: classes.radioRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot
                  }}
                  label="16 bytes"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  disabled
                  control={
                    <Radio
                      checked={true}
                      value="b"
                      name="radio button disabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        disabled: classes.disabledCheckboxAndRadio,
                        root: classes.radioRoot
                      }}
                    />
                  }
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label="124 bytes"
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
