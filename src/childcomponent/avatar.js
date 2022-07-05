import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    select: {
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
        padding: '13px',
    },
})



function AvatarSelect(props) {

    const classes = useStyles();

    return(
        <Select
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
            <MenuItem value={10}>Xem thông tin</MenuItem>
            <MenuItem value={20}>Đăng xuất</MenuItem>
        </Select>
    );
}
export default AvatarSelect;