import { AppBar, Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from '../../childcomponent/taskListWorker/style';

const Search = ({ tasks, setSearchData }) => {
  const classes = useStyles();

  const [search, setSearch] = useState('');
  const searchTask = () => {
    if (search.trim()) {
      setSearchData(
        tasks.filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))
      );
    } else {
      setSearchData(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      searchTask();
    }
  };
  return (
    <AppBar className={classes.appBarSearch} position="static" color="inherit">
      <TextField
        style={{ margin: '10px 0' }}
        name="search"
        variant="outlined"
        placeholder="Tên"
        fullWidth
        onKeyPress={handleKeyPress}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={searchTask} color="primary" variant="contained">
        探す
      </Button>
    </AppBar>
  );
};

export default Search;
