const counterCreator = () => {
  let count = 1;
  count += 1;
  const getCount = () => console.log(count);
  return { getCount, count };
};

test = counterCreator();

const counter = counterCreator();

counter();
counter();

counter.getCount;
