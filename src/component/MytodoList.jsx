import React, { useCallback, useEffect, useState } from "react";

const MytodoList = () => {
  const [totalcount, setTotalcount] = useState(0);
  const [checked, setChecked] = useState(false);
  const [totalCheckbox, setTotalCheckbox] = useState([1, 2, 3, 4, 5]);
  useEffect(() => {
    if (checked === true) {
      setTotalcount((prev) => prev + 1);
    } else {
      setTotalcount((prev) => prev - 1);
    }
  }, [checked]);
  const handleChecked = (item, index) => {
    setChecked(!checked);
  };

  const handleDelete = useCallback(
    (index) => {
      const data = totalCheckbox?.filter((item) => item !== index);
      setTotalCheckbox(data);
    },
    [totalCheckbox]
  );

  return (
    <div>
      <div> My todolist</div>
      <div>
        <div>Total Completed : {totalcount}</div>
      </div>
      <div>
        <div>Total List: {totalCheckbox?.length}</div>
      </div>

      <div>All Lists</div>

      {totalCheckbox?.map((item, index) => {
        return (
          <>
            <div key={item}>
              <label htmlFor={item}>Todo {item}</label>
              <input
                type="checkbox"
                name={item}
                id={item}
                onChange={() => handleChecked(item, index)}
              />
            </div>
            <button onClick={() => handleDelete(index + 1)}>delete</button>
          </>
        );
      })}
    </div>
  );
};

export default MytodoList;
