// This file is used to export the Material-UI component styling for Gallery.js


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    buttonStyle: {
        color: "white",
        background: "#54a0ff",
        
        "&:hover": {
            background: "#54a0ff",
            opacity: ".8"
        }
    },
    searchIcon: {
        fontSize: '40px',
        color: "#54a0ff"
    },
});

export { useStyles };