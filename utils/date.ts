const date = {
  getToday: () => {
    const today = new Date();
    return {
      todayYear: today.getFullYear(),
      todayMonth: today.getMonth() + 1,
      todayDate: today.getDate(),
    };
  },
};

export default date;
