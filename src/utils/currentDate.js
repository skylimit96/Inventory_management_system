import { useState, useEffect } from 'react';

function useCurrentDate() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    function getCurrentDate() {
      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

      const today = new Date();
      const day = today.getDate();
      const monthIndex = today.getMonth();
      const year = today.getFullYear();

      const formattedDate = `${day} ${months[monthIndex]} ${year}`;
      setCurrentDate(formattedDate);
    }

    getCurrentDate();
  }, []);

  return currentDate;
}

export default useCurrentDate;
