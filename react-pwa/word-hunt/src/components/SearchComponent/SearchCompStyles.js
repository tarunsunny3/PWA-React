import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    title:{
        fontSize: "6vw",
        fontFamily: 'Montserrat',
        textTransform: 'uppercase',
       
        [theme.breakpoints.between('sm', 'md')]:{
            fontSize: '8vw'
        },
        [theme.breakpoints.between('xs', 'sm')]:{
            fontSize: '12vw'
        },
    },
    paper:{
        display: 'flex',
        justifyContent: "center",
    },
    displayText:{
        marginTop: "5%",
        fontFamily: "Open Sans, serif",
        color: "green",
        [theme.breakpoints.down('sm')]:{
            marginTop: '10%',
            fontSize: '1.5rem'
        }
    }
}));