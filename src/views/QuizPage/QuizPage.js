import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/core/SvgIcon/SvgIcon";
import {db} from 'config.js'

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function QuizPage(props){
    const classes = useStyles();
    const { ...rest } = props;

    //const [sessionID, setSessionID] = React.useState('');
    React.useEffect(() => {
        console.log("useEffect");
        loadQuiz2();
    }, []);

    const loadQuiz2 = async () => {
        const itemsRef = db.ref('quizzes');
        itemsRef.on('value', (callback) => {
            let items = callback.val();
            console.log(items);
        })
    }

    return(
        <div>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classNames(classes.container)}>

                </div>
            </div>
        </div>
    );

};
