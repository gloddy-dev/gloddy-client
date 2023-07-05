const getDate = {
  today: () => {
    const today = new Date();
    return {
      todayYear: today.getFullYear(),
      todayMonth: today.getMonth() + 1,
      todayDate: today.getDate(),
    };
  },
};

export default getDate;
