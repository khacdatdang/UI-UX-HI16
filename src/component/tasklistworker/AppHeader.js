import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { SelectButton } from './Button';
import styles from '../../styles/modules/app.module.scss';
import TodoModal from './TodoModal';
import { updateFilterStatus } from '../../slices/todoSlice';

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>

      <div className="filer-bar flex gap-4">
        <Button id="status" onClick={(e) => updateFilter(e)} value="all">
          All
        </Button>
        <Button
          id="status"
          onClick={(e) => updateFilter(e)}
          //className="bg-yellow-500 w-40 rounded-lg"
          value="incomplete"
        >
          Incomplete
        </Button>
        <Button
          id="status"
          onClick={(e) => updateFilter(e)}
          value="complete"
          //className="bg-lime-600 w-40 rounded-lg"
        >
          Completed
        </Button>
      </div>

      {/* <SelectButton
        id="status"
        onChange={(e) => updateFilter(e)}
        value={filterStatus}
      >
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton> */}
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
