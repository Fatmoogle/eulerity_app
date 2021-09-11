// This file is used to export the Material-UI component styling for About.js

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    gitHub: {
        fontSize: '90px',
        maxHeight: '50px',
        cursor: 'pointer',
        transition: 'opacity 0.3s',
        
        "&:hover": {
            opacity: '.8',
            transition: 'opacity 0.3s ease-in-out'
        }
    },
    portfolio: {
        fontSize: '90px',
        maxHeight: '50px',
        color: '#D6A2E8',
        cursor: 'pointer',
        transition: 'opacity 0.3s',

        "&:hover": {
            opacity: '.8',
            transition: 'opacity 0.3s ease-in-out'
        }
    },
    linkedIn: {
        fontSize: '90px',
        maxHeight: '50px',
        color: '#2867B2',
        cursor: 'pointer',
        transition: 'opacity 0.3s',

        "&:hover": {
            opacity: '.8',
            transition: 'opacity 0.3s ease-in-out'
        }
    },
    typographyClass: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around'
    }
});

export { useStyles };