// This file is used to export the Material-UI component styling for Pet.js

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    Checked: {
        position: 'absolute',
        top: '5px',
        left: '5px',
        fontSize: '40px',
        color: '#0abde3',
        filter: 'drop-shadow(1px 1px 1px black)',
        zIndex: 1,
        opacity: '1',
        transform: 'translateY(0)',
        transition: 'opacity 0.3s ease-in-out, transform 0.25s ease-in-out',
    },
    NotChecked: {
        position: 'absolute',
        opacity: '0',
        transform: 'translateY(30px)',
        
    }
});

export { useStyles };