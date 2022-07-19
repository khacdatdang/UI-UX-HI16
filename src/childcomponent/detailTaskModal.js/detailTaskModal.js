import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Box, Container, FormControl, FormControlLabel, Grid, InputLabel, Link, ListItemAvatar, MenuItem, Paper, Popover, Radio, RadioGroup, Select, Slider, Stack, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { green } from '@mui/material/colors';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
// import StarRatings from './react-star-ratings';
import StarRatings from 'react-star-ratings';
import SegmentIcon from '@mui/icons-material/Segment';
import { padding } from '@mui/system';
import SaveIcon from '@mui/icons-material/Save';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    elevation: 3,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const theme = createTheme({
    //v5.0.0
    typography: {
        body2: {
            htmlFontSize: 8
        }
      },
  });

  const marks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function DetailTaskModal({open, handleClose, data}) {
  console.log(data)
  const [status, setstatus] = React.useState(data.status)
  const [statusanchorEl, setStatusAnchorEl] = React.useState(null);
  const handleClickStatusAnchor = (event) => {
    setStatusAnchorEl(event.currentTarget);
  };
  const handleCloseStatusAnchor = () => {
    setStatusAnchorEl(null);
  };
  const openStatusAnchor = Boolean(statusanchorEl);
  const statusid = openStatusAnchor ? 'simple-popover' : undefined;
  const handleSubmitChangeState = (event) => {
    event.preventDefault();
    data.status = status;
    handleCloseStatusAnchor();
  }
  const handleRadioChange = (event) => {
    setstatus(event.target.value);
  };

  const [process, setprocess] = React.useState(data.process)
  const [processanchorEl, setprocessAnchorEl] = React.useState(null);
  const handleClickProcessAnchor = (event) => {
    setprocessAnchorEl(event.currentTarget);
  };
  const handleCloseProcessAnchor = () => {
    setprocessAnchorEl(null);
  };
  const openProcessAnchor = Boolean(processanchorEl);
  const processid = openProcessAnchor ? 'simple-popover' : undefined;
  const handleSubmitChangeProcess= (event) => {
    event.preventDefault();
    data.process = process + '%';
    handleCloseProcessAnchor();
  }
  const handleProcessChange = (event) => {
    setprocess(event.target.value)
    console.log(event.target.value);
  }

  const [mark, setmark] = React.useState(data.mark)
  const [markanchorEl, setmarkAnchorEl] = React.useState(null);
  const handleClickmarkAnchor = (event) => {
    setmarkAnchorEl(event.currentTarget);
  };
  const handleClosemarkAnchor = () => {
    setmarkAnchorEl(null);
  };
  const openmarkAnchor = Boolean(markanchorEl);
  const markid = openmarkAnchor ? 'simple-popover' : undefined;
  const handleSubmitChangemark= (event) => {
    event.preventDefault();
    data.mark = mark 
    handleClosemarkAnchor();
  }
  const handlemarkChange = (event) => {
    setmark(event.target.value)
    console.log(event.target.value);
  }

  const [evaluation, setEvaluation] = React.useState({volumn : '',
                                                    quality : '',
                                                    process :'',
                                                    mark : '',
                                                    summary : '',
                                                    date : ''})
  const [evaluationAnchorEl, setEvaluationAnchorEl] = React.useState(null);
  const handleClickEvaluationAnchor = (event) => {
    setEvaluationAnchorEl(event.currentTarget);
  };
  const handleCloseEvaluationAnchor = () => {
    setEvaluationAnchorEl(null);
  };
  const openEvaluationAnchor = Boolean(evaluationAnchorEl);
  const evaluationid = openEvaluationAnchor ? 'simple-popover' : undefined;
  const handleSubmitChangeEvaluation = (event) => {
    event.preventDefault();
    data.evaluation = evaluation;
    setEvaluation({volumn : '',quality : '',process :'',mark : '',summary : '',date : ''})
    handleCloseEvaluationAnchor();
  }

  const handleEvaluationChange = (event) => {
    // event.persist()
    console.log(evaluation);
    setEvaluation({...data.evaluation, [event.target.name] : event.target.value})
  }

  return (
    <Dialog
    fullScreen
    open={open}
    onClose={handleClose}
    // TransitionComponent={Transition}
  >
    <AppBar sx={{ position: 'relative' }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
          Chi tiết công việc 
        </Typography>
        <Button autoFocus color="inherit" onClick={handleClose}>
          save
        </Button>
      </Toolbar>
    </AppBar>
    <div style={{ width: '100%' }}>
        <Grid container spacing = {2} >
            <Grid item xs = {12} md = {3}>
                <Paper elevation = {1} sx = {{padding : 3}}> 
                <Typography variant="subtitle1" gutterBottom component="div" sx = {{fontWeight : 'bold'}}>
                    Danh sách người thực hiện 
                </Typography>
                <Paper elevation={1}>
                    <List sx = {{ marginBottom: 2}}>
                    {data.assignee.length != 0 ? 
                        data.assignee.map((item) => { return (
                            <ListItem>
                                <ListItemAvatar>
                                    <AccountCircleIcon/>
                                </ListItemAvatar>
                                <ListItemText>
                                    {item}
                                </ListItemText>
                            </ListItem>
                        )})
                        : " "
                    }
                    </List>
                </Paper>
               
    
                <Divider/>

                <Typography variant="subtitle1" gutterBottom component="div" sx = {{marginTop : 2, fontWeight : 'bold'}} >
                    Danh sách giám sát 
                </Typography>
                <Paper elevation={1}>
                    <List sx = {{ marginBottom: 2}}>
                        <ListItem>
                            <ListItemAvatar>
                            {data.observer ? <AccountCircleIcon/> : " "}
                            </ListItemAvatar>
                            <ListItemText>
                                {data.observer ? data.observer : " "}
                            </ListItemText>
                        </ListItem>
                    </List>
                </Paper>

                
                <Divider/>

                <Typography variant="subtitle1" gutterBottom component="div" sx = {{marginTop : 2, fontWeight : 'bold'}} >
                    Thông tin người giao việc 
                </Typography>
                <Typography variant="subtitle2" gutterBottom component="div" sx = {{marginTop : 1}} >
                    Người giao : Đặng Khắc Đạt
                </Typography>
                <Typography variant="subtitle2" gutterBottom component="div" sx = {{marginTop : 1}} >
                    Ngày giao : {data.start_date}
                </Typography>

                <Divider/>

                <Typography variant="subtitle1" gutterBottom component="div" sx = {{marginTop : 2, fontWeight : 'bold'}} >
                    Thông tin đánh giá công việc 
                </Typography>
                <Stack direction="row" spacing={2} >
                    <CheckBoxIcon/>
                    <Typography variant="subtitle2" gutterBottom component="div" sx = {{marginTop : 1}} >
                        Cần đánh giá bởi Đặng Khắc Đạt 
                    </Typography>
                </Stack>
               
                <Typography variant="subtitle2" gutterBottom component="div" sx = {{marginTop : 1}} >
                    Khối lượng:       {data.evaluation.volumn}
                </Typography>
                <Typography variant="subtitle2" gutterBottom component="div" sx = {{marginTop : 1}} >
                    Tiến độ:           {data.evaluation.process}
                </Typography>
                <Typography variant="subtitle2" gutterBottom component="div" sx = {{marginTop : 1}} >
                    Chất lượng:       {data.evaluation.quality}
                </Typography>
                <Button variant = 'text' aria-describedby={evaluationid} onClick={handleClickEvaluationAnchor}  sx = {{textTransform: 'none', marginBottom: 2}}>Bạn muốn thay đổi đánh giá  </Button>
                
                <Popover 
                 id={evaluationid}
                 open={openEvaluationAnchor}
                 anchorEl={evaluationAnchorEl}
                 onClose={handleCloseEvaluationAnchor}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 100, left: 20 }}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                >
                    <form onSubmit = {handleSubmitChangeEvaluation}>
                    <Typography variant = "body2" gutterBottom sx = {{mt : 1, pr : 10, pl: 3}}> Khối lượng </Typography>
                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Khối lượng</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        defaultValue={data.evaluation.volumn}
                        name = "volumn"
                        onChange={handleEvaluationChange}
                        autoWidth
                        label="Khối lượng"
                    >
                        <MenuItem value="">Khối lượng</MenuItem> 
                        <MenuItem value={"Đạt"}>Đạt</MenuItem>
                        <MenuItem value={"Không Đạt"}>Không Đạt</MenuItem>
                        
                    </Select>
                    </FormControl>
                    <br/>
                    <Typography variant = "body2" gutterBottom sx = {{mt : 1, pr : 10, pl: 3}}> Chất lượng </Typography>
                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Chất lượng </InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        defaultValue={data.evaluation.quality}
                        name = "quality"
                        onChange={handleEvaluationChange}
                        autoWidth
                        label="Chất lượng"
                    >
                        <MenuItem value="">Chất lượng</MenuItem>
                        <MenuItem value={"Đạt"}>Đạt</MenuItem>
                        <MenuItem value={"Không Đạt"}>Không Đạt</MenuItem>
                        
                    </Select>
                    </FormControl>

                    <Typography variant = "body2" gutterBottom sx = {{mt : 1, pr : 10, pl: 3}}> Tiến độ </Typography>
                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Tiến độ </InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        defaultValue={data.evaluation.process}
                        name = "process"
                        onChange={handleEvaluationChange}
                        autoWidth
                        label="Tiến độ"
                    >
                        <MenuItem value="">Tiến độ</MenuItem>
                        <MenuItem value={"Đúng hạn"}>Đúng hạn </MenuItem>
                        <MenuItem value={"Chậm trễ"}>Chậm trễ</MenuItem>
                    </Select>
                    </FormControl>

                    <Typography variant = "body2" gutterBottom sx = {{mt : 1, pr : 10, pl: 3}}> Điểm</Typography>
                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Điểm</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        defaultValue={data.evaluation.mark}
                        name = "mark"
                        onChange={handleEvaluationChange}
                        autoWidth
                        label="Điểm"
                    >
                        <MenuItem value="">Điểm</MenuItem>
                        {
                            marks.map((item) => (
                        <MenuItem value={item}>{item} </MenuItem>
                            ))
                        }
                    </Select>
                    </FormControl>

                    <Typography variant = "body2" gutterBottom sx = {{mt : 1, pr : 10, pl: 3}}> Kết luận </Typography>
                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Kết luận</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        defaultValue={data.evaluation.summary}
                        name = "summary"
                        onChange={handleEvaluationChange}
                        autoWidth
                        label="Kết luận"
                    >
                        <MenuItem value="">Kết luận</MenuItem>
                        <MenuItem value={"Hoàn thành"}>Hoàn thành</MenuItem>
                        <MenuItem value={"Làm lại"}>Làm lại</MenuItem>
                    </Select>
                    </FormControl>
                    <br/>
                    <Button sx={{ m: 1, textTransform: 'none' }} type="submit" variant="outlined" >
                                <SaveIcon/>  Lưu thay đổi
                            </Button>
                    </form>
                </Popover>

                </Paper>
            </Grid>




            <Grid item xs = {12} md = {7}>
                <Paper elevation = {1} sx = {{padding : 3}}>
                    <Typography variant="h6" gutterBottom component="div" sx = {{fontWeight : 'bold'}}>
                        {data.title}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div" sx = {{marginBottom: 5}}>
                        Khách hàng: {data.customer}
                    </Typography>
                    {/* <Typography variant="subtitle2" gutterBottom component="div" >
                        Trong dự án: {data.title}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom component="div" >
                        Trong hạng mục : {data.title}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom component="div" >
                        Chế độ: {data.title}
                    </Typography> */}

                    <Grid container spacing = {1}>
                        <ThemeProvider theme = {theme}>
                            <Grid item md = {2}>
                            <Typography variant="body2" gutterBottom sx = {{fontWeight : 'bold', fontSize : '12px'}}>THỜI GIAN </Typography>
                            </Grid>
                            <Grid item md = {2}>
                            <Typography variant="body2" gutterBottom sx = {{fontWeight : 'bold', fontSize : '12px'}}>NGÀY BẮT ĐẦU </Typography>
                            </Grid>
                            <Grid item md = {2}>
                            <Typography variant="body2" gutterBottom sx = {{fontWeight : 'bold', fontSize : '12px'}}>NGÀY HẾT HẠN </Typography>
                            </Grid>
                            <Grid item md = {2}>
                            <Typography variant="body2" gutterBottom sx = {{fontWeight : 'bold', fontSize : '12px'}}>TRẠNG THÁI </Typography>
                            </Grid>
                            <Grid item md = {1}>
                            <Typography variant="body2" gutterBottom sx = {{fontWeight : 'bold', fontSize : '12px'}}>TIẾN ĐỘ</Typography>
                            </Grid>
                            <Grid item md = {1}>
                            <Typography variant="body2" gutterBottom sx = {{fontWeight : 'bold', fontSize : '12px'}}>ĐIỂM</Typography>
                            </Grid>
                            <Grid item md = {2}>
                            <Typography variant="body2" gutterBottom sx = {{fontWeight : 'bold', fontSize : '12px'}}>CHẤT LƯỢNG</Typography>
                            </Grid>
                        </ThemeProvider>
                    </Grid>
                    <Grid container spacing = {1}>
                        <Grid item md = {2}>
                        <Button variant="outlined" disabled style={{maxWidth: '90px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', textDecoration : 'none'}}>
                            {Math.ceil((new Date(data.end_date).getTime() - new Date(data.start_date).getTime()) / (1000 * 3600 * 24))} ngày
                            </Button>
                        </Grid>
                        <Grid item md = {2}>
                        <Button variant="outlined" disabled style={{maxWidth: '90px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', fontSize: '12px', padding : '0px'}}>{data.start_date}</Button>
                        </Grid>
                        <Grid item md = {2}>
                        <Button variant="outlined" disabled style={{maxWidth: '90px', maxHeight: '30px', minWidth: '50px', minHeight: '30px', fontSize: '12px', padding : '0px'}}>{data.end_date}</Button>
                        </Grid>
                        <Grid item md = {2}>
                        <Button variant="contained" aria-describedby={statusid} onClick={handleClickStatusAnchor} style={{maxWidth: '100px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', fontSize : '12px', textTransform: 'none', padding : '0px'}}>{!data.status ? "Chưa thực hiện" : data.status}</Button>
                        </Grid>
                        {/* Pop over for update state  */}
                        <Popover
                            id={statusid}
                            open={openStatusAnchor}
                            anchorEl={statusanchorEl}
                            onClose={handleCloseStatusAnchor}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            
                        >
                            <Typography sx={{ p: 2 } } align = 'center'>Thay đổi trạng thái</Typography>
                            <Divider></Divider>
                            
                            <form onSubmit={handleSubmitChangeState}>
                            <FormControl sx = {{padding : '10px 100px 20px 20px'}}>
                            {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={data.status}
                                name="radio-buttons-group"
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel value="Chưa thực hiện" control={<Radio />} label="Chưa thực hiện" />
                                <FormControlLabel value="Đang thực hiện" control={<Radio />} label="Đang thực hiện" />
                                <FormControlLabel value="Chờ đánh giá" control={<Radio />} label="Chờ đánh giá" />
                                <FormControlLabel value="Hoàn thành" control={<Radio />} label="Hoàn thành" />
                                <FormControlLabel value="Tạm dừng" control={<Radio />} label="Tạm dừng" />
                                <FormControlLabel value="Hủy" control={<Radio />} label="Hủy" />
                            </RadioGroup>
                            <Button sx={{ mt: 1, mr: 1, textTransform: 'none' }} type="submit" variant="outlined" >
                                <SaveIcon/>  Lưu thay đổi
                            </Button>
                            </FormControl>
                            </form>
                            
                        </Popover>

                        <Grid item md = {1}>
                        
                        <Button variant="contained" aria-describedby={processid} onClick={handleClickProcessAnchor} color = "success" disabled = {data.status !== "Chưa thực hiện" ? false : true} style={{maxWidth: '100px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', fontSize : '12px', textTransform: 'none', padding : '0px'}}> {!data.process ? '0%' : data.process}</Button>
                        <Popover
                            id={processid}
                            open={openProcessAnchor}
                            anchorEl={processanchorEl}
                            onClose={handleCloseProcessAnchor}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            >
                          <Typography sx={{ p: 2 } } align = 'center'>Thay đổi tiến độ </Typography>
                            <Divider></Divider>
                            <form onSubmit={handleSubmitChangeProcess}>
                                <Box sx={{ width: 300, padding : '20px' }}>
                                    <Slider
                                    aria-label="Always visible"
                                    defaultValue={0}
                                    // getAriaValueText={valuetext}
                                    step={5}
                                    // marks={marks}
                                    valueLabelDisplay="on"
                                    onChange = {handleProcessChange}
                                    />
                                </Box>
                                <Button sx={{ m : 2, textTransform: 'none' }} type="submit" variant="outlined" >
                                <SaveIcon/>  Lưu thay đổi
                            </Button>
                            </form>
                        </Popover>

                        </Grid>
                        <Grid item md = {1}>
                        <Button variant="contained" aria-describedby={markid} onClick={handleClickmarkAnchor} color = "secondary" disabled = {(data.status === "Đang thực hiện" || data.status === "Chưa thực hiện") ? true : false}style={{maxWidth: '100px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', fontSize : '12px', textTransform: 'none', padding : '0px'}}>{data.mark ? data.mark : 0}</Button>
                        <Popover
                            id={markid}
                            open={openmarkAnchor}
                            anchorEl={markanchorEl}
                            onClose={handleClosemarkAnchor}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            >
                          <Typography sx={{ p: 2 } } align = 'center'>Chấm điểm</Typography>
                            <Divider></Divider>
                            <form onSubmit={handleSubmitChangemark}>
                                <Box sx={{ width: 300, padding : '20px' }}>
                                    <Slider
                                    aria-label="Always visible"
                                    defaultValue={0}
                                    // getAriaValueText={valuetext}
                                    step={10}
                                    // marks={marks}
                                    valueLabelDisplay="on"
                                    onChange = {handlemarkChange}
                                    />
                                </Box>
                                <Button sx={{ m : 2, textTransform: 'none' }} type="submit" variant="outlined" >
                                <SaveIcon/>  Lưu thay đổi
                            </Button>
                            </form>
                        </Popover>

                        </Grid>
                        <Grid item md = {2}>
                        <StarRatings rating={3} starRatedColor="gray"  numberOfStars={5} name='rating' starDimension = '10px' starSpacing = '3px'
        />
                        </Grid>
                    </Grid>

                <Stack direction="row" spacing={2} sx = {{marginTop : 4, marginBottom : 2}}>
                    <SegmentIcon/>
                    <Typography variant = "subtitle1" sx ={{fontWeight : 'bold'}}> Mô tả </Typography>
                </Stack>
                <Typography variant = "subtitle1" guttterBottom >{data.description}</Typography>

                {/* <Stack direction="row" spacing={2} sx = {{marginTop : 4, marginBottom : 2}}>
                    <CheckBoxIcon/>
                    <Typography variant = "subtitle1" sx ={{fontWeight : 'bold'}}> Việc cần làm </Typography>
                </Stack> */}
                </Paper>
            </Grid>


            <Grid item xs = {12} md = {2}>
                <Paper elevation = {1} sx = {{padding : 3}}>
                    <Button variant = 'contained' color = 'error'  style={{textTransform: 'none'}}> Chỉnh sửa công việc  </Button>
                </Paper>
            </Grid>
        </Grid>
    </div>
  </Dialog>
  )
}

export default DetailTaskModal