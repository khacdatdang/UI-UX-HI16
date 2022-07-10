import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core";
import { hover } from "@testing-library/user-event/dist/hover";
import "./select.scss";

const useStyles = makeStyles({
    button: {
        '&:focus': {
            background: '#f00',
        },
        '&:before': {
            borderColor: 'white',
        },
        '&:after': {
            borderColor: 'white',
        },
        '&:not(.Mui-disabled):hover::before': {
            borderColor: 'white',
        },
        '&:hover': {
            background: 'rgba(0,0,0,0.2)',
        },
    },
    icon: {
        fill: 'white',
    },
    root: {
        color: 'white',
        padding: '20.5px',
    },
})



function MenuSelect(props) {

    const classes = useStyles();

    return(
        <button className="select--btn" onClick={() => window.location.href = props.link}>{props.value}</button>
    );
}
export default MenuSelect;

{
    /**
     * <Select
    value={""}
    displayEmpty
    OutlinedInput
    inputProps={{ 
        'aria-label': 'Without label',
        classes: {
            select: classes.select,
            icon: classes.icon,
            root: classes.root,
        }, 
    }}
    disableUnderline
>
    <MenuItem value="">
        {props.value}
    </MenuItem>
</Select>
     */
}